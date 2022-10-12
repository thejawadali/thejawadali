#!/bin/bash
yarn build
echo "thejawadali.com" > ./dist/CNAME
yarn gh-pages -d dist