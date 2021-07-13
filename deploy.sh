#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 

git add -A 

git commit -m 'Deployment'

git push -f https://github.com/abiodun603/medhouse.github.io.git master:gh-pages

cd -