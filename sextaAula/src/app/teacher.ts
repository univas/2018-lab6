export class Teacher {

    id : number;

    course : string;

    subject : string;

    name : string;

    year : number;

    semester : number;

    constructor(id?: number, course?: string, subject?: string, name?: string,
                year?: number, semester?: number) {
        this.id = id;
        this.course = course;
        this.subject = subject;
        this.name = name;
        this.year = year;
        this.semester = semester;
    }

}