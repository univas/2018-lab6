import { Course } from "./course";

export class Subject {

    id : number;

    name : string;

    period : number;
    
    workload : number;

    course_fk : number;

    course : Course;

    constructor(id?: number, name?: string, period?: number, workload?: number, course?: Course) {
        this.id = id;
        this.name = name;
        this.period = period;
        this.workload = workload;
        this.course = course;
    }

}