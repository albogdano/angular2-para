#!/bin/bash

ng build --prod --base-href /angular2-para/
git add -A && git commit -am "updated demo" && git push -f origin master
echo "-- done --"
