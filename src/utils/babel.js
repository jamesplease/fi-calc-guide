const babel = require('@babel/core');

module.exports = function (code) {
  const result = babel.transformSync(code, {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            ie: '11',
          },
          modules: false,
        },
      ],
    ],
  });

  return result.code;
};
