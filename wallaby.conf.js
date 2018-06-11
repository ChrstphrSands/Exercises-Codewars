module.exports = function (wallaby) {
  return {
    files: [
      '8kyu/src/**/*.ts'
    ],

    tests: [
      '8kyu/test/**/*.spec.ts'
    ],
    // testFramework: 'mocha',
    // '**/*.ts': wallaby.compilers.typeScript({
    //
    // }),
    env: {
      type: 'node'
    }
  };
};