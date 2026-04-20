const fs = require("fs");
// fs.mkdir("docs", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("directory created");


// })


// fs.writeFile("docs/file.txt", "hello world", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("file written")
// })


fs.readFile("docs/file.txt", (err, data) => {
    if (err) {
        console.log(err, message);
    }
    else {
        console.log(data.toString());
    }
})
