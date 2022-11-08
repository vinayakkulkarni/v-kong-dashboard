# Kong :: Admin Dashboard 🌉

[![The Pipeline](https://github.com/vinayakkulkarni/v-kong-dashboard/actions/workflows/pipeline.yml/badge.svg)](https://github.com/vinayakkulkarni/v-kong-dashboard/actions/workflows/pipeline.yml)
[![Ship js trigger](https://github.com/vinayakkulkarni/v-kong-dashboard/actions/workflows/shipjs-trigger.yml/badge.svg)](https://github.com/vinayakkulkarni/v-kong-dashboard/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-kong-dashboard?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-kong-dashboard/releases)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-kong-dashboard)](https://snyk.io/test/github/vinayakkulkarni/v-kong-dashboard)
[![license](https://img.shields.io/github/license/vinayakkulkarni/v-kong-dashboard)](https://github.com/vinayakkulkarni/v-kong-dashboard/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-kong-dashboard)](https://github.com/vinayakkulkarni/v-kong-dashboard/graphs/contributors)

[![eslint](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-kong-dashboard/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-kong-dashboard/dev/prettier?logo=prettier)](https://prettier.io/)
[![stylelint](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-kong-dashboard/dev/stylelint?logo=stylelint)](https://stylelint.io/)
[![nuxt](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-kong-dashboard/dev/nuxt?logo=nuxt.js)](https://v3.nuxtjs.org/)
[![typescript](https://img.shields.io/github/package-json/dependency-version/vinayakkulkarni/v-kong-dashboard/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

---

## About

Dashboard for managing Kong API Gateway.

## Stacktrace

Development stack:

- [Nuxt TypeScript](https://typescript.nuxtjs.org/)
- [WindiCSS](https://windicss.org/)

CI/CT stack:

- [GitHub Actions](./.github/workflows/ci.yml)

Deployment stack:

- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Cloudfront](https://aws.amazon.com/cloudfront/)
- [Ship.js](https://github.com/algolia/shipjs)

## Usage

### Docker

```sh
$ docker run -p 3000:3000 ghcr.io/vinayakkulkarni/v-kong-dashboard:latest
```

## Environment Setup

### Development

```sh
$ git clone git@github.com:vinayakkulkarni/v-kong-dashboard.git
$ cd v-kong-dashboard
$ npm install
$ npm run dev
```

## Release Process 🏗

- Once all features/bugfixes are deployed on `dev`, create a PR from `dev` to `test`
- Once the PR is merged from `dev` -> `test`, run `npm run release` & ship.js will trigger a build with updated [CHANGELOG](./CHANGELOG.md) & proper [git tags](https://github.com/vinayakkulkarni/v-kong-dashboard/tags)
- Follow the guide from the automated PR from Ship.js
- Once you **Squash & Merge** the automated PR, wait for the [Ship.js trigger](https://github.com/vinayakkulkarni/v-kong-dashboard/actions/workflows/shipjs-trigger.yml) workflow to run successfully.
- Rebase your `dev` with `test` to ensure the correct release is also displayed on `dev` env
- Once the QA gives a sign off on `test` env, rebase `stage` with `test` to update the UAT environment
- Once UAT is ready, rebase `main` with `stage` to update the Production environment

## Branching Strategy 🎋

- Create your feature branch from `dev` branch, eg. `feat/add-web-worker-JIRA-123`
- Create a new PR from `feat/add-web-worker-JIRA-123` to `dev`
- Once the PR is merged into `dev`, create a new PR from `dev` to `test`
- Once the PR is merged into `test`, rebase `dev` with `test`, eg. `git fetch --all && git checkout dev && git rebase origin/test && git push`
- Checkout on `test` & then run a new ship.js release workflow by running `npm run release:prepare` (Ensure you have a valid GitHub PAT in .env [GITHUB_TOKEN=PAT])
- Ship.js will automatically update the [CHANGELOG](./CHANGELOG.md) & once you review and **Sqaush Merge** the PR
- Inform on Teams about the new release so that QA team can test on the newer version
- Once the QA passes all the tests, rebase the `stage` branch with `test`
- Once the PR is merged, you **HAVE** to rebase `dev` & all your other branches/PRs which haven't gone in the previous release.

```bash
$ git fetch --all && git checkout dev && git rebase origin/test && git push
```

Once ship.js automatically prepares the Pull Request, kindly merge it and rest is done automatically by GitHub action and is driven by `deploy-{env}.yml` file.

## Time logging ⌚️

Since we'll be using Jira to log time, we have to follow the [Smart Commits](https://support.atlassian.com/jira-software-cloud/docs/process-issues-with-smart-commits/) to ensure the time is correctly logged against each ticket. For that, you have to follow some steps.

Once you've cloned the repository, there are few steps before you can start using the Smart Commits syntax

```sh
$ cd v-kong-dashboard
$ git config --local --add user.email <your-email-address>
```

Next, create a bug-fix/feature branch from `origin/dev` (or the default branch).

```sh
$ git fetch --all
$ git checkout -b feat/add-web-worker-JIRA-123 origin/dev
# Branch 'feat/add-web-worker-JIRA-123' set up to track remote branch 'dev' from 'origin'.
# Switched to a new branch 'feat/add-web-worker-JIRA-123'
```

Next, once you've done the changes, perform a Smart Commit

```sh
$ git add .
$ git commit -m 'feat: integrate web worker JIRA-123 #time 2h'
$ git push
```

Done. Now goto Jira board, and check for the Time Tracking section on the Jira ticket `JIRA-123`

> Note: Each commit should have atleast the Jira ticket & time associated with it.

## Contributing

1. Create your feature branch from `dev` (`git checkout -b feat/new-feature`)
2. Commit your changes (`git commit -Sam 'feat: add feature'`)
3. Push to the branch (`git push origin feat/new-feature`)
4. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-kong-dashboard/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_
