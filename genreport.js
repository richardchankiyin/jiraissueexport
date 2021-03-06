var fs=require("fs");
var outjson="out_json";
var files=fs.readdirSync(outjson);

//console.log(files.length);

var headerfields=fs.readFileSync("_header").toString();
//var headerfields="id,key,fields.issuetype.name,fields.project.name,fields.reporter.name,fields.reporter.emailAddress,fields.created,fields.status.name,fields.summary";
var headerfieldarr=headerfields.split(",");

var out="out_report.csv"

if (fs.existsSync(out))
    fs.unlinkSync(out);

//append header
fs.appendFileSync(out,headerfields);

for (var i = 0; i < files.length; i++) {
    var json=JSON.parse(fs.readFileSync(outjson + "/" + files[i]));
    var issuelength=json.issues.length;
    var issues=json.issues;

    for (var j = 0; j < issuelength; j++) {
        var str = "";
        for (var k = 0; k < headerfieldarr.length; k++) {
            str += "\"" + eval("issues[j]." + headerfieldarr[k]) + "\"";
            str += ","; 
        } //end for k
        //console.log(issues[j].fields.description);
        fs.appendFileSync(out,str+"\n");
    } //end for j
} //end for i
