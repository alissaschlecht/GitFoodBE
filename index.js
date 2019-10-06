const app = require('./app');

// Safety first: listen only on first import to avoid EADDRINUSE exceptions
if (!module.parent) {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`GitFood backend listening on port ${process.env.PORT || 8080}`);
  });
}
