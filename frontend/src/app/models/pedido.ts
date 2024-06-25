export class Pedido {
    public id:number;
    public nombre_plato:string;
    public cantidad:number;
    public descripcion:string;
    public esp:string;

    constructor(id:number,nombre_plato:string,cantidad:number,descripcion:string,esp:string){
        this.id=id;
        this.nombre_plato=nombre_plato;
        this.cantidad=cantidad;
        this.descripcion=descripcion;
        this.esp=esp;
    }
}

export interface Pedido{
    "id":number;
    "nombre_plato":string;
    "cantidad":number;
    "descripcion":string;
    "esp":string;
}
