export class NavbarItem{
    private label:string;

    constructor(lab: string){
        this.label = lab;
    }

    public getLabel(){
        return this.label;
    }
}