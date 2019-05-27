export class Producto{
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public descuento: number,
        public inicio_descuento: string,
        public fin_descuento: string,
        public imagen: string
    ) {}
}
