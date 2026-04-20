// const fs = require("fs");
// // fs.mkdir("docs", (err) => {
// //     if (err) {
// //         console.log(err);
// //     }
// //     console.log("directory created");


// // })


// // fs.writeFile("docs/file.txt", "hello world", (err) => {
// //     if (err) {
// //         console.log(err);
// //     }
// //     console.log("file written")
// // })

// if (fs.existsSync("docs/file.txt")) {
//     fs.readFile("docs/file.txt", (err, data) => {
//         if (err) {
//             console.log(err, message);
//         }
//         else {
//             console.log(data.toString());
//         }
//     })
// }
const fs = require("fs");

fs.rm("docs", { recursive: true, force: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory removed successfully");
    }
});