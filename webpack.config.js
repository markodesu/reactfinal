// webpack.config.js
module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // You can add your custom middleware setup here
        return middlewares;
      },
    },
  };
  