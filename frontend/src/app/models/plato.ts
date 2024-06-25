export class Plato {
    public nombre:string;
    public desc:string;
    public costo:number;
    public cant:number;

    constructor(nombre:string,desc:string,costo:number,cant:number){
        this.nombre=nombre;
        this.desc=desc;
        this.costo=costo;
        this.cant=cant;
    }
}

export interface Plato{
    "nombre":string;
    "desc":string;
    "costo":number;
    "cant":number;
}
