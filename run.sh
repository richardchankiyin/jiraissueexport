#!/bin/bash

c=$(node total.js)
node jsonout.js $c
node genreport.js
