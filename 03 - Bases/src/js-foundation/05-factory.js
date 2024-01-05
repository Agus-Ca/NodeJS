//const { getUUID } = require('../plugins/get-uuid.plugin')
//const { getAge } = require('../plugins/get-age.plugin')
//const { getUUID, getAge } = require('../plugins')



const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}

//const obj = { name: 'Agus', birthdate: '1997-05-30' };
//const agu = buildPerson( obj );
//console.log(agu);

module.exports = {
    buildMakePerson,
}