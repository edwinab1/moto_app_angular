import { categoria } from "./categoria.interface";

export interface product {

    categoria?: categoria; // tipo categorias
    nombre: string;
    descripcion: string;
    precio_unitario: number;
    estado?: boolean;
    stock_minimo: number;
    imagen: string;    
    
}