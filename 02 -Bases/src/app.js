//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring')
//const { getUserById } = require('./js-foundation/04-arrow')
//const { getUUID, getAge } = require('./plugins')
//const { buildMakePerson } = require('./js-foundation/05-factory')
const { getPokemonById } = require('./js-foundation/06-promises')

//console.log(emailTemplate);

//const id = 1;
//getUserById( id, ( error, user ) => {
//    if ( error ) {
//        throw new Error( error )
//    }
//    console.log( user );
//});

//const makePerson = buildMakePerson({ getUUID, getAge })
//const obj = { name: 'Agus', birthdate: '1997-05-30' };
//const agus = makePerson(obj);
//console.log(agus);

getPokemonById( 4 )
    .then( ( pokemon ) => console.log({ pokemon }) )
    .catch( ( err ) => console.log( 'Error al obtener el pokemon' ))
    .finally( () => console.log( 'Finalmente' ));