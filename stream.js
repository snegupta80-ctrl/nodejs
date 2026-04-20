const fs = require("fs");

const readableStream = fs.createReadStream("hugefile.txt",'utf-8');
const writeableStream = fs.createWriteStream("hugefile1.txt",'utf-8');
readableStream.on("data", (buffer) => {
    console.log(buffer);
    writeableStream.write(buffer);
})