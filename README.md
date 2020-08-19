# NodeJS Prepare Asset

## [GitHub Action](https://github.com/features/actions) written in [TypeScript](http://www.typescriptlang.org/)

### Prepare asset for upload - [GitHub Action](https://github.com/features/actions).

This action provides the _name_ and _path_ of a single file in a directory, so your workflow can access it.

[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Issues][issues-image]][issues-url]

[![Codacy Badge][codacy-imge]][codacy-url][![Code maintainability][code-maintainability-image]][code-maintainability-url] [![Code issues][code-issues-image]][code-issues-url] [![Code Technical Debt][code-tech-debt-image]][code-tech-debt-url]

[![Main Language][language-image]][code-metric-url] [![Languages][languages-image]][code-metric-url] [![Code Size][code-size-image]][code-metric-url] [![Repo-Size][repo-size-image]][code-metric-url]

|                                                                  |                                                                            | [![Release][release-image]][release-url]                                     |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [![Master Build][master-build-image]][master-url]                | [![Master Coverage][master-coveralls-image]][master-coveralls-url]         | [![Master Version][master-version-image]][master-version-url]                |
| [![Development Build][development-build-image]][development-url] | [![Test Coverage][development-coveralls-image]][development-coveralls-url] | [![Development Version][development-version-image]][development-version-url] |

## Usage

```YML
    ...
    - name: nodejs project information
      id: projectinfo
      uses: gregoranders/nodejs-project-info@v0.0.11
    - name: create release action
      id: createrelease
      uses: gregoranders/nodejs-create-release@v0.0.11
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        PACKAGE_JSON: ${{ steps.projectinfo.outputs.context }}
      with:
        tag: v${{ steps.projectinfo.outputs.version }}
        name: ${{ steps.projectinfo.outputs.name }} - ${{ steps.projectinfo.outputs.version }} Release
        target: ${{ github.ref }}
    - name: nodejs prepare asset
      id: prepareasset
      uses: gregoranders/nodejs-prepare-asset@v0.0.11
      with:
        path: dist
    - name: upload asset
      id: uploadasset
      uses: gregoranders/nodejs-upload-asset@v0.0.11
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        id: ${{ steps.createrelease.outputs.id }}
        path: ${{ steps.prepareasset.path }}
        name: ${{ steps.prepareasset.name }}
    ...
```

#### Inputs/Outputs

```YML
inputs:
  path:
    description: 'Path to asset'
    required: true
outputs:
  name:
    description: 'Asset Name'
  path:
    description: 'Asset Path'
```

[release-url]: https://github.com/gregoranders/nodejs-prepare-asset/releases
[master-url]: https://github.com/gregoranders/nodejs-prepare-asset/tree/master
[development-url]: https://github.com/gregoranders/nodejs-prepare-asset/tree/development
[repository-url]: https://github.com/gregoranders/nodejs-prepare-asset
[code-metric-url]: https://github.com/gregoranders/nodejs-prepare-asset/search?l=TypeScript
[travis-url]: https://travis-ci.org/gregoranders/nodejs-prepare-asset
[travis-image]: https://travis-ci.org/gregoranders/nodejs-prepare-asset.svg?branch=master
[daviddm-url]: https://david-dm.org/gregoranders/nodejs-prepare-asset
[daviddm-image]: https://david-dm.org/gregoranders/nodejs-prepare-asset.svg?branch=master
[license-url]: https://github.com/gregoranders/nodejs-prepare-asset/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/gregoranders/nodejs-prepare-asset.svg
[master-version-url]: https://github.com/gregoranders/nodejs-prepare-asset/blob/master/package.json
[master-version-image]: https://img.shields.io/github/package-json/v/gregoranders/nodejs-prepare-asset/master
[development-version-url]: https://github.com/gregoranders/nodejs-prepare-asset/blob/development/package.json
[development-version-image]: https://img.shields.io/github/package-json/v/gregoranders/nodejs-prepare-asset/development
[issues-url]: https://github.com/gregoranders/nodejs-prepare-asset/issues
[issues-image]: https://img.shields.io/github/issues-raw/gregoranders/nodejs-prepare-asset.svg
[release-image]: https://img.shields.io/github/release/gregoranders/nodejs-prepare-asset
[release-build-image]: https://github.com/gregoranders/nodejs-prepare-asset/workflows/Release%20CI/badge.svg
[master-build-image]: https://github.com/gregoranders/nodejs-prepare-asset/workflows/Master%20CI/badge.svg
[development-build-image]: https://github.com/gregoranders/nodejs-prepare-asset/workflows/Development%20CI/badge.svg
[master-coveralls-url]: https://coveralls.io/github/gregoranders/nodejs-prepare-asset?branch=master
[master-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/nodejs-prepare-asset/master
[development-coveralls-image]: https://img.shields.io/coveralls/github/gregoranders/nodejs-prepare-asset/development
[development-coveralls-url]: https://coveralls.io/github/gregoranders/nodejs-prepare-asset?branch=development
[code-maintainability-url]: https://codeclimate.com/github/gregoranders/nodejs-prepare-asset/maintainability
[code-maintainability-image]: https://img.shields.io/codeclimate/maintainability/gregoranders/nodejs-prepare-asset
[code-issues-url]: https://codeclimate.com/github/gregoranders/nodejs-prepare-asset/maintainability
[code-issues-image]: https://img.shields.io/codeclimate/issues/gregoranders/nodejs-prepare-asset
[code-tech-debt-url]: https://codeclimate.com/github/gregoranders/nodejs-prepare-asset/maintainability
[code-tech-debt-image]: https://img.shields.io/codeclimate/tech-debt/gregoranders/nodejs-prepare-asset
[language-image]: https://img.shields.io/github/languages/top/gregoranders/nodejs-prepare-asset
[languages-image]: https://img.shields.io/github/languages/count/gregoranders/nodejs-prepare-asset
[code-size-image]: https://img.shields.io/github/languages/code-size/gregoranders/nodejs-prepare-asset
[repo-size-image]: https://img.shields.io/github/repo-size/gregoranders/nodejs-prepare-asset
[codacy-imge]: https://app.codacy.com/project/badge/Grade/f67f0f69c2f64cdcb81e8464473ff032
[codacy-url]: https://www.codacy.com/manual/gregoranders/nodejs-prepare-asset
