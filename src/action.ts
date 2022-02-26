import * as core from '@actions/core';

// eslint-disable-next-line prettier/prettier
import { readdirSync, realpathSync } from 'node:fs';
// eslint-disable-next-line prettier/prettier
import { join, resolve } from 'node:path';

export const run = async () => {
  const assetPath = core.getInput('path', { required: true });

  try {
    const syncedPath = realpathSync(assetPath);
    const basePath = resolve(syncedPath);
    const files = readdirSync(basePath);

    if (!files || files.length === 0) {
      throw new Error('No files found in ' + basePath);
    }

    if (files.length !== 1) {
      throw new Error('Found more than one file in ' + basePath);
    }

    core.setOutput('name', files[0]);
    core.setOutput('path', join(basePath, files[0]));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    core.setFailed(error);
  }
};
