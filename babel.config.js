module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // Keep it here as a preset
    ],
    plugins: [["react-native-reanimated/plugin"]], // Removed nativewind/babel
  };
};
