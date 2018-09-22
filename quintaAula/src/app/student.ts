export class Student {

    id : number;

    name : string;

    email : string;

    cpf : string;

    telephone : string;

    constructor(id? : number, name? : string, email? : string, cpf? : string, telephone? : string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.telephone = telephone;
    }

}