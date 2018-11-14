#!/bin/bash

#git add -A && git commit -am "updated angular2-para" && git push origin master
npm run --base "/angular2-para/" build.prod 
#git checkout gh-pages
#git rebase master
cp -rf dist/prod/** ./docs/
git add -A && git commit -am "updated angular2-para" && git push -f origin master
#git checkout master
echo "-- done --"
