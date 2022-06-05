#!/bin/sh

set -e

pwd
remote=$(git config remote.origin.url)
siteSource="build"

echo 'sitesource is: '$siteSource
echo 'remote is: '$remote

rm -rf gh-pages-branch
mkdir gh-pages-branch

cp -rfb "../build" "./gh-pages-branch"

cd gh-pages-branch

cd build

git config --global user.email "$GH_EMAIL" >/dev/null 2>&1

git config --global user.name "$GH_NAME" >/dev/null 2>&1

git init

git remote add --fetch origin "$remote"

# if git rev-parse --verify origin/gh-pages then
#     git checkout gh-pages
#     git rm -rf .
# else
#     git checkout --orphan gh-pages
# fi


git checkout --orphan gh-pages

ls -la

git add .
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"

git push origin gh-pages -f

# cd ..

# rm -rf gh-pages-branch

echo "Finished deployment!"

exec /bin/bash

