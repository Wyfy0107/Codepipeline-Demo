#!/bin/bash

sudo apt-get update
sudo apt-get install nodejs -y
sudo npm i -g pm2 
sudo ./install auto > /tmp/logfile