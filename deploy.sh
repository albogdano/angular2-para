#!/bin/bash

git add -A && git commit -am "updated angular2-para" && git push origin master
git checkout --orphan gh-pages
git rebase master
npm run build.prod
cp -rf dist/prod/** ./
git add -A
git push origin gh-pages
git checkout master
echo "-- done --"
