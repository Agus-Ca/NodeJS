interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate:string) => number
}

interface PersonProperties {
    name: string;
    birthdate: string;
}


export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
    return ({ name, birthdate }: PersonProperties) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}