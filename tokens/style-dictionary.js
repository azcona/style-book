const tokens = require("./tokens.utils")

const StyleDictionary = require('style-dictionary');

const themes = ["sw-theme", "sw-crazy-theme"];

themes.forEach(theme => {

  StyleDictionary.extend({
    source: [`tokens/**/${theme}.tokens.json`],
    parsers: [{
      pattern: /\.json$/,
      parse: ({ filePath, contents }) => {
        return tokens.parse_figma_tokens(contents);
      }
    }],
    platforms: {
      scss: {
        transformGroup: "scss",
        buildPath: "tokens/build/scss/",
        files: [
          {
            destination: `_variables.${theme}.scss`,
            format: "scss/variables"
          },
          {
            destination: `_map.${theme}.scss`,
            format: "scss/map-flat",
            mapName: "tokens"
          }
        ]
      }
    }
  }).buildAllPlatforms();
});




