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
            "@components": "./src/components",
            "@features": "./src/features",
            "@models": "./src/models",
            "@pages": "./src/pages",
            "@utils": "./src/utils"
          }
        }
      ]
    ]
  }
}
