//console.log( process.env );

const { COMPUTERNAME, OS } = process.env;

//console.table({ COMPUTERNAME, OS });

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [ , , , batman ] = characters;

//console.log(batman);