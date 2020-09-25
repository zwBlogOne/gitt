// prettier-ignore
module.exports = {
  presets: ["@vue/babel-preset-app"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    ["import", { libraryName: "vant", libraryDirectory: "es", style: true }, "vant"]
  ]
};
