/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '@resources/(.*)$': '<rootDir>/resources/$1',
        '@test/(.*)$': '<rootDir>/test/$1'
    }
};
