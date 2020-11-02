export class BSolicitudT {
    
    Id_Encargado:number
    Id_Repartidor:number
    Id_Bodega: number
    Id_Trans:number
    Productos:[]

    constructor(
        _Id_Encargado:number,
        _Id_Repartidor:number,
        _Id_Bodega: number,
        _Id_Trans:number,
        _Productos:[]
        ){

        this.Id_Encargado=_Id_Encargado;
        this.Id_Repartidor=_Id_Repartidor;
        this.Id_Bodega=_Id_Bodega;
        this.Id_Trans=_Id_Trans;
        this.Productos=_Productos;
    }
}
