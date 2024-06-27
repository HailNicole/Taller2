export class Pedido {
    public id:number;
    public nombre_plato:string;
    public cantidad:number;
    public descripcion:string;
    public esp:string;
    public costoTotal:number;
    public id_plato:number;

    constructor(id:number,nombre_plato:string,cantidad:number,descripcion:string,esp:string,costoTotal:number,id_plato:number){
        this.id=id;
        this.nombre_plato=nombre_plato;
        this.cantidad=cantidad;
        this.descripcion=descripcion;
        this.esp=esp;
        this.costoTotal=costoTotal;
        this.id_plato=id_plato;
    }
}

export interface Pedido{
    "id":number;
    "nombre_plato":string;
    "cantidad":number;
    "descripcion":string;
    "esp":string;
    "costoTotal":number;
    "id_plato":number;
}