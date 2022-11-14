const fs= require('fs/promises');
const path = require('path');


// fs.mkdir('./boys', (err)=>{
//     console.log(err);
// });
//
// fs.mkdir('./girls', (err)=>{
//     console.log(err);
// });

// fs.appendFile('./boys/kolya.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/vasya.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/dima.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/max.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/andriy.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/vova.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/ania.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./boys/olia.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });

// fs.appendFile('./girls/julia.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/karina.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/sofia.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/viktor.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/vika.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/daria.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/sasha.json', JSON.stringify({gender: 'male'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/katia.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });
//
// fs.appendFile('./girls/masha.json', JSON.stringify({gender: 'female'}), (err)=>{
//     console.log(err);
// });

const sorter = async (readFolder, writeFolder, gender) => {
    try {
        const folderPath = path.join(__dirname, readFolder);

        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = await fs.readFile(filePath);
            const user = JSON.parse(data);

            if (user.gender === gender) {
                await fs.rename(filePath, path.join(__dirname, writeFolder, file));
            }
        }
    } catch (e) {
        console.error(e)
    }
}

sorter('boys', 'girls', 'female');
sorter('girls', 'boys', 'male');

