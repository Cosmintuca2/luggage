export class Luggage {
    id: number;
    currentHour: string;
    content: string;

    constructor(id:number,hour: string,content: string) {
        this.id = id;
        this.currentHour = hour;
        this.content = content;
    }
}