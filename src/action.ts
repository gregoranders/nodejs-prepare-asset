import * as core from '@actions/core';

import { readdirSync, realpathSync } from 'fs';
import { join, resolve } from 'path';

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
  } catch (error) {
    core.setFailed(error);
  }
};
