// 

const fs = require('fs');

const { writeFile, readFile } = fs;

const path = require('path');

// Synchronous

// fs.writeFileSync('content.txt', 'This is my first file!', (err) => {
//     if (err) {
//         throw err;
//     };

//     process.stdout.write('File created successfully!');
// });

// Asynchronous 

writeFile('content.txt', 'This is our project!', (err) => {
    if (err) {
        throw err;
    
    };

    process.stdout.write('File created successfully!');
});

const filePath = path.join(process.cwd(), 'content.txt');

fs.readFile(filePath, (error, content) => {
    if (error) throw error;

    process.stdout.write(content);
});

// Outputs the files in a directory.

// fs.readdir(process.cwd(), (error, files) => {
//     if (error) throw error;

//     console.log(files);
// });

//Delete a file

// fs.unlink(filePath, (error) => {
//     if (error) throw error;

//     console.log('File deleted!');
// });

// Recursive creation

fs.mkdir(`${process.cwd()}/src/newFolder`, {recursive: true}, (err) => {
    if (err) throw err;

    console.log('Folder created successfully!!!!!!!!');
});

//Non-recursive creation

// fs.mkdir(`${process.cwd()}/myFolder`, (err) => {
//     if (err) throw err;

//     console.log('Folder created successfully!');
//   });

// Not working currently 

// fs.rmdir(`${process.cwd()}/newFolder`, {recursive: true}, (err) => {
//     if (err) throw err;

//     console.log('Folder deleted successfully!!!!!!!!');
// });
