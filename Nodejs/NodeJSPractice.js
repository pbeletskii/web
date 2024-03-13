
let fs = require('fs');
fs.readFile('txt.txt', 'utf8', function(error, fileContent){
   if(error) throw error; 
   console.log('Чтение данных из файла');
   console.log(fileContent); 
   
   let toWrite = fileContent.split("").reverse().join("");

   fs.writeFile('txt.txt', toWrite, function(error){
      if(error) throw error; 
      console.log('Запись данных в файл');
      console.log(toWrite);
   });
});