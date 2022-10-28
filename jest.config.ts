// Node
import path from 'node:path';

// Libraries
import type { JestConfigWithTsJest } from 'ts-jest';

const ROOT_DIR = path.resolve('.');
const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': `${ROOT_DIR}/src/$1`,
  },
};

export default jestConfig;
