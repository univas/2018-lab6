export class Course {

    id : number;

    name : string;

    period : number;

    constructor(id?: number, name?: string, period?: number) {
        this.id = id;
        this.name = name;
        this.period = period;
    }

}