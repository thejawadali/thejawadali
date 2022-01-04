#!/bin/bash
pnpm build
echo "thejawadali.com" > ./dist/CNAME
pnpm gh-pages -d dist