node total.js > _out_temp
set /p total= < _out_temp
del _out_temp
node jsonout.js %total%
node genreport.js