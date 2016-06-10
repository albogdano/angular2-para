#!/bin/bash

git add -A && git commit -am "updated angular2-para" && git push origin master
git checkout gh-pages
git rebase master
npm run build.prod
cp -rf dist/prod/** ./
git add -A && git commit -am "updated angular2-para demo" && git push -f origin gh-pages
git checkout master
echo "-- done --"
