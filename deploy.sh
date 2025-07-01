#!/bin/bash

ng build -c production --base-href /angular2-para/
sed -i -e "s/\"\\/\"/\"\\/angular2-para\\/\"/g" docs/manifest.webmanifest

git add -A && git commit -am "updated demo" && git push -f origin master
echo "-- done --"
