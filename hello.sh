#!/bin/bash

#print hello world
echo $BASH
echo $BASH_VERSION
echo $HOME
echo $USER

name=$USER

echo my name is $name

git add .
echo "message: "
read msg
echo $msg
git commit -m "$msg"
git push origin master

