module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@features': './src/features',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@pages': './src/pages',
            '@store': './src/store',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
