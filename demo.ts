class Applicant {
    private name: string;
    static count:number=0;
    constructor(name: string) {
        this.name = name;
        Applicant.count++;
    }
}
console.log(Applicant.count);
let app1=new Applicant('Lần 1');
console.log(Applicant.count);