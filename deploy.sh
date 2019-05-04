#!/bin/bash

git add .
echo "message: "
read msg
git commit -m "$msg"
git push origin master

