const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');
console.log('Palabras: ', words.length);

const reactWordCount = words.filter(word => word.toLowerCase().includes('react')).length;
console.log('Palabras \'react\': ', reactWordCount);

const reactWordCountRegex = content.match(/react/gi ?? []).length;
console.log("Palabras /'react/' (regex): ", reactWordCountRegex);