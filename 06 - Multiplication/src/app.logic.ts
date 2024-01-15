import fs from 'fs';
import { yarg } from './config/plugins/args.plugin'



const { b:base, l:limit, s:displayTable } = yarg;

const headerMessage = `
======================================
           Tabla del ${ base }
======================================\n
`;
let bodyMessage = '';
for (let i = 1; i <= limit; i++) {
    bodyMessage += `${ base } x ${i} = ${ base * i } \n`;    
}
const outputMessage = headerMessage + bodyMessage;

if ( displayTable ) console.log( outputMessage );

const outputPath = 'outputs';
fs.mkdirSync( outputPath, { recursive: true } );
fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);
console.log('File created!');