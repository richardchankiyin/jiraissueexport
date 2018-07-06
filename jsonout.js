var req=require("request");
var fs=require("fs");

if (process.argv.length <= 2) {
   process.exit(-1);
}

var length = process.argv[2];
//console.log("length: " + length);

var ceil=Math.ceil(length / 100);
//console.log("ceil: " + ceil);

if (!fs.existsSync("out_json"))
   fs.mkdirSync("out_json"); 
var out="out_json/out.";

var url=fs.readFileSync("_url");


for (var i = 0; i < ceil; i++) {
   req(url + "&startAt=" + i * 100 + "&maxResults=100").pipe(fs.createWriteStream(out + i));

} // end for
