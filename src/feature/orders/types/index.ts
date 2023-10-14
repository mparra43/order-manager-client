

export interface FiltersOrder {
    orderId:string;
    documentType:string;
    document:string;
}

export interface FiltersOrderApi {
    orderId:string;
    documentType:string;
    document:number
}

export interface Customer {
    name:string;
    document: string
    documentType:string;

}

export interface Product {
    name:string;
    reference:string;
}

export interface ProductsOrder {
   id:string;
   quantity:number;
   product:Product;
}

export interface Order {
    id:string;
    address:string;
    state:string;
    estimatedDeliveryDate:string;
    orderProducts:ProductsOrder[]
    customer:Customer
}

export interface OrderResponse {
    order:any
}