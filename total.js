var request=require("request");
var fs=require("fs");

var url=fs.readFileSync("_url") + "&startAt=0&maxResults=1";
if (!fs.existsSync("out_total"))
    fs.mkdirSync("out_total");
var out="out_total/out.log";

function getTotal(url,out) {
    request(url).pipe(fs.createWriteStream(out).on('finish', function() {console.log(JSON.parse(fs.readFileSync(out)).total);}));
}

getTotal(url,out);

