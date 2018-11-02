import { Course } from "./course";

export class Subject {

    id : number;

    name : string;

    course : Course;

    constructor(id?: number, name?: string, course?: Course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

}