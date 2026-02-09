// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig } = require('shakapacker')

const webpackConfig = generateWebpackConfig()

// Add .tsx and .ts to resolve extensions so we can import without specifying them
const tsExtensions = ['.tsx', '.ts']
tsExtensions.forEach((ext) => {
  if (!webpackConfig.resolve.extensions.includes(ext)) {
    webpackConfig.resolve.extensions.push(ext)
  }
})

module.exports = webpackConfig
