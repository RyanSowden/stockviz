const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {

  moduleDirectories: ['node_modules', './'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

module.exports = createJestConfig(customJestConfig)
