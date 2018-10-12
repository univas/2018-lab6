import { Subject } from "./subject";

export class Teacher {

    id : number;

    name : string;

    email : string;

    subject : Subject;

    constructor(id?: number, name?: string, email?: string, subject?: Subject) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subject = subject;
    }

}