var myBday = "03/21/1988";
var convertedDate = moment(myBday, "MM/DD/YYYY");

console.log(convertedDate.format("dddd"));

console.log(convertedDate.format("DD/MM/YYYY"));

var time = moment().format("h:mm:ss a");
console.log(time);

console.log(typeof time);

console.log(moment().format("h a"));

console.log(moment().subtract(10, "days").calendar());

console.log(moment().add(10, "days").calendar());

console.log(moment().format("h"));
