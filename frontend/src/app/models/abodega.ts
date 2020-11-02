export class ABodega {
    Id_Bodega:number
    Nombre:string
    FK_Sede:number

    constructor(
        _Id_Bodega:number,
        _Nombre:string,
        _Id_Sede:number
    ){
        this.Id_Bodega=_Id_Bodega;
        this.Nombre=_Nombre;
        this.FK_Sede=_Id_Sede;
    }
}
