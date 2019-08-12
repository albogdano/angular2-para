#!/bin/bash

ng build --prod
git add -A && git commit -am "updated demo" && git push -f origin master
echo "-- done --"
