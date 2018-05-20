#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
GITHUB_EMAIL="circleci@gh-pages.com"
GITHUB_NAME="CircleCI"

git config --global user.email ${GITHUB_EMAIL}
git config --global user.name ${GITHUB_NAME}

git clone ${CIRCLE_REPOSITORY_URL} out
cd out
git checkout ${TARGET_BRANCH} || git checkout --orphan ${TARGET_BRANCH}
git rm -rf .
cd ..

yarn docs:build
cp -a dest/. out/.
mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.

cd out
git add -A
git commit -m "Automated deployment to GitHub Pages" --allow-empty
git push origin ${TARGET_BRANCH}
