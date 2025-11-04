// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Required for Expo Router
config.transformer.unstable_allowRequireContext = true;

// SVG support
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Fix asset and source extensions
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');

module.exports = config;
