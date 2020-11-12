#! /bin/bash
#push to github

if [ -n "$1" ]
then
    if [ $1 = "archive" ]
    then
        ionic build --prod
    fi
fi