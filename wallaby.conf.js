module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/**/*.spec.ts'
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
