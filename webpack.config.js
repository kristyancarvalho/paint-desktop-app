const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader for transpiling JSX and ES6+
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for babel
          },
        },
      },
    ],
  },
};
