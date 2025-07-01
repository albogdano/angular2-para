#!/bin/bash

rm -rf docs build
ng build -c production --base-href /angular2-para/
sed -i -e "s/\"\\/\"/\"\\/angular2-para\\/\"/g" docs/browser/manifest.webmanifest
mv build/browser docs
git add -A && git commit -am "updated demo" && git push -f origin master
echo "-- done --"
