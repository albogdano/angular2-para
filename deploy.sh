#!/bin/bash

git add -A && git commit -am "updated angular2-para" && git push origin master
npm run build.prod
git checkout gh-pages
git rebase master
cp -rf dist/prod/** ./
git add -A && git commit -am "updated angular2-para demo" && git push -f origin gh-pages
git checkout master
echo "-- done --"
