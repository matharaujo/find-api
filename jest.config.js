/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  moduleFileExtensions: ['js', 'ts', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/test/fix-istanbul-decorators.js',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  collectCoverageFrom: ['**/*controller.ts', '**/*usecase.ts'],
};
