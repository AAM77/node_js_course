const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Adeel';
data.age = 1199;

const jsonData = JSON.stringify(data);
fs.writeFileSync('1-json.json', jsonData );
