// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

const path = require('path');

const paths = {
  // assets: path.resolve(__dirname, 'assets'),
  src: path.resolve(__dirname),
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.android.js',
          '.ios.js',
          '.web.js',
          '.png',
          '.jpg',
        ],
        root: ['./src'],
        alias: paths,
      },
    ],
  ],
};
