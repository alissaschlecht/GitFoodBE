const dishesService = require('../services/dishes.service.js');
const versionsService = require('../services/versions.service.js');
const ingredientsService = require('../services/ingredients.service.js');
const instructionsService = require('../services/instructions.service.js');

const getAllDishes = async (req, res) => {
  try {
    const dishes = await dishesService.getAllDishes();

    const response = await Promise.all(dishes.map(async (dish) => {
      const versions = await dish.getVersions();

      return {
        ...dish.get({ plain: true }),
        versions,
      };
    }));

    return res.status(200).json({
      dishes: response,
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const createOneDish = async (req, res) => {
  const dishToCreate = req.body.dish;

  if (!dishToCreate) {
    return res.status(500).json({
      error: 'A dish is mandatory.',
    });
  }
  
  try {
    const dish = await dishesService.createOneDish(dishToCreate);

    let version = null;
    if (dishToCreate.version) {
      version = await versionsService.createOneVersion({
        dishId: dish.id,
        ...dishToCreate.version
      });

      let ingredients = null;
      if (dishToCreate.version.ingredients && dishToCreate.version.ingredients.length > 0) {
        ingredients = await Promise.all(dishToCreate.version.ingredients.map((ingredient) => {
          return ingredientsService.createOneIngredient({
            versionId: version.id,
            ...ingredient
          });
        }));
        
      }

      let instructions = null;
      if (dishToCreate.version.instructions && dishToCreate.version.instructions.length > 0) {
        instructions = await Promise.all(dishToCreate.version.instructions.map((instruction) => {
          return instructionsService.createOneInstruction({
            versionId: version.id,
            ...instruction
          });
        }));
        
      }

      version = {
        ...version.get({ plain: true }),
        ingredients,
        instructions,
      };
    }

    return res.status(200).json({
      dish: {
        ...dish.get({ plain: true }),
        versions: [version]
      },
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const getOneDish = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    const dish = await dishesService.getOneDish(id);
    const versions = await dish.getVersions();

    const versionResponse = await Promise.all(versions.map(async (version) => {
      const ingredients = await version.getIngredients();
      const instructions = await version.getInstructions();

      return {
        ...version.get({ plain: true }),
        ingredients,
        instructions
      };
    }));

    const response = {
      dish: {
        ...dish.get({ plain: true }),
        versions: versionResponse,
      },
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const deleteOneDish = async (req, res) => {
  const id = req.params.id;
  
  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }
  
  try {
    await dishesService.deleteOneDish(id);

    return res.status(200).json({
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

const updateOneDish = async (req, res) => {
  const id = req.params.id;
  const dishToUpdate = req.body.dish;

  if (!id) {
    return res.status(500).json({
      error: 'An id is mandatory.',
    });
  }

  if (!dishToUpdate) {
    return res.status(500).json({
      error: 'A dish is mandatory.',
    });
  }
  
  try {
    await dishesService.updateOneDish(dishToUpdate, id);
    const dish = await dishesService.getOneDish(id);

    return res.status(200).json({
      dish
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};


module.exports = {
  getAllDishes,
  createOneDish,
  getOneDish,
  deleteOneDish,
  updateOneDish
};
