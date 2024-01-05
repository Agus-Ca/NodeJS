//console.log( process.env );

const { COMPUTERNAME, OS } = process.env;

//console.table({ COMPUTERNAME, OS });

const characters = ['Flsh', 'Superman', 'Green Lantern', 'Batman'];
const [ , , , batman ] = characters;

//console.log(batman);