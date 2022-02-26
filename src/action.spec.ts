import { clearTestEnvironment, setInput } from './fixtures/test-utils';

import { run as testSubject } from './action';

import { resolve } from 'node:path';
import { mkdirSync, rmdirSync } from 'node:fs';

describe('nodejs-prepare-asset', () => {
  const fixturesPath = './src/fixtures/one';

  beforeEach(() => {
    clearTestEnvironment();
  });

  afterAll(() => {
    rmdirSync('./src/fixtures/empty');
  });

  describe('invalid directory', () => {
    it('non existant', async () => {
      setInput('path', './wertw');
      return expect(testSubject()).resolves.toHaveCoreError(/^ENOENT: no such/);
    });

    it('empty', async () => {
      mkdirSync('./src/fixtures/empty');
      setInput('path', './src/fixtures/empty');
      return expect(testSubject()).resolves.toHaveCoreError(/^No files found/);
    });

    it('more files', async () => {
      setInput('path', './src');
      return expect(testSubject()).resolves.toHaveCoreError(/^Found more/);
    });
  });

  describe('valid directory', () => {
    it('path', async () => {
      const fullPath = resolve(fixturesPath, 'test.ts');
      setInput('path', fixturesPath);
      return expect(testSubject()).resolves.toHaveCoreOutput('path', fullPath);
    });

    it('name', async () => {
      setInput('path', fixturesPath);
      return expect(testSubject()).resolves.toHaveCoreOutput('name', 'test.ts');
    });
  });
});
