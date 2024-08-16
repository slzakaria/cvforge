#!/bin/bash
echo "cleaning up old files and cache >>>"
cd .
rm -rf ./node_modules
rm -rf ./build

echo "installing dependencies >>>"
npm ci

echo "starting project >>>"
npm run dev
