module.exports = {
  style: {
    sass: {
      loaderOptions: {
        prependData: `
            @import "src/style/variables.scss";
            @import "src/style/mixins.scss";
          `,
      },
    },
  },
};
