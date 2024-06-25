export class Plato {
    public nombre:string;
    public desc:string;
    public costo:number;

    constructor(nombre:string,desc:string,costo:number){
        this.nombre=nombre;
        this.desc=desc;
        this.costo=costo;
    }
}

export interface Plato{
    "nombre":string;
    "desc":string;
    "costo":number;
}
