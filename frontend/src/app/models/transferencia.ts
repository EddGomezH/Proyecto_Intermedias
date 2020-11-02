export class Transferencia {
    Id_Trans:number
    NSede:string
    Encargado:string
    Productos:[]

    constructor(
        _Id_Trans:number,
        _NSede:string,
        _Encargado:string,
        _Productos:[]
    ){
        this.Id_Trans=_Id_Trans;
        this.NSede=_NSede;
        this.Encargado=_Encargado;
        this.Productos=_Productos;
    }
}
