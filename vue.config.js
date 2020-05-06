const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    },
    less: {
      modifyVars: {
        'font-size-sm': '12px',
        'font-size-md': '14px',
        'font-size-lg': '16px',
        'goods-action-button-danger-color': '#7232dd',
        'goods-action-button-warning-color': '#3eaf7c'
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
  }
};
