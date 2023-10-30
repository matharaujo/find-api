// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: tsJest } = require('ts-jest');

module.exports = fixIstanbulDecoratorCoverageTransformer();

function fixIstanbulDecoratorCoverageTransformer() {
  // The option of isolatedModules was necessary for me
  const transformer = tsJest.createTransformer({ isolatedModules: true });

  const process = transformer.process.bind(transformer);

  transformer.process = (...args) => {
    const result = process(...args);

    // Ignore decorators on methods and properties
    result.code = result.code.replace(
      /__decorate/g,
      '/* istanbul ignore next */__decorate',
    );

    // When constructor parameters have decorated properties (eg @inject), TS adds
    // a typeof branch check, which we don't want to instrument
    result.code = result.code.replace(
      /(?<=__metadata\("design:paramtypes".*?)(typeof \(_\w\s*=)/g,
      '/* istanbul ignore next */$1',
    );

    return result;
  };

  return transformer;
}
