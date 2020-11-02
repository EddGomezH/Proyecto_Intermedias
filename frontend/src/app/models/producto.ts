export class Producto {
    Id_Producto: number
    SKU: string
    CodigoBarras: string
    Nombre: string
    Descripcion: string
    Id_Categoria: number
    Precio: number

    constructor(
    _Id_Producto: number,
    _SKU: string,
    _CodigoBarras: string,
    _Nombre: string,
    _Descripcion: string,
    _Precio: number
    ){
        this.Id_Producto=_Id_Producto;
        this.SKU=_SKU;
        this.CodigoBarras=_CodigoBarras;
        this.Nombre=_Nombre;
        this.Descripcion=_Descripcion;
        this.Precio=_Precio;
    }
}
