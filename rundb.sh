#!/bin/bash
read -p 'Enable authentication? [y/n] ' auth
if [ "$auth" = "" ]; then 
    auth='y'
fi
if [ "$auth" = "n" ]; then
    echo running without auth
    mongod --dbpath ./db
else
    echo running with auth
    mongod --auth --dbpath ./db
fi
auth=""