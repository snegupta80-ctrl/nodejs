const fs = require("fs");

const readableStream = fs.createReadStream("hugefile.txt", 'utf-8');
console.log(readableStream)
const writeableStream = fs.createWriteStream("hugefile1.txt", 'utf-8');
readableStream.on("data", (buffer) => {
    writeableStream.write('buffer')
})
readableStream.on("error", (err) => {
    console.log(err.message);
})
writeableStream.on("error", (err) => {
    console.log(err.message);
})
