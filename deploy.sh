#!/bin/bash

git add -A && git commit -am "updated angular2-para" && git push origin master
git checkout gh-pages
git rebase master
git push origin gh-pages
git checkout master
echo "-- done --"
