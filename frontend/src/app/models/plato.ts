export class Plato {
    public id:number;
    public nombre:string;
    public desc:string;
    public costo:number;
    public cant:number;
    public img:string;

    constructor(id:number,nombre:string,desc:string,costo:number,cant:number,img:string){
        this.id=id;
        this.nombre=nombre;
        this.desc=desc;
        this.costo=costo;
        this.cant=cant;
        this.img=img;
    }
}

export interface Plato{
    "id":number;
    "nombre":string;
    "desc":string;
    "costo":number;
    "cant":number;
    "img":string
}