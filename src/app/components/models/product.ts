import {Category} from "./category"
import {User} from "./user"
import { Reclamation } from "./reclamation";



export class Product {
    idProduct:number;
    referenceProduct:String;
    nameProduct:String;
    imageProduct:String;
    descriptionProduct:String;
    priceProduct:number;
    quantityProduct:number;
    expired:number;
    expirationDateProduct:Date;
    userProduct:User[];
    categoryProduct:Category[];
    ReclamationsProduct:Reclamation[];

    constructor( idProduct:number,referenceProduct:String,nameProduct:String, imageProduct:String, descriptionProduct:String,
        priceProduct:number,quantityProduct:number,expired:number,expirationDateProduct:Date,
        userProduct:User[],categoryProduct:Category[],ReclamationsProduct:Reclamation[]){
            this.idProduct=idProduct;
            this.referenceProduct=referenceProduct;
            this.nameProduct=nameProduct;
            this.imageProduct=imageProduct;
            this.descriptionProduct=descriptionProduct;
            this.priceProduct=priceProduct;
            this.quantityProduct=quantityProduct;
            this.expired=expired;
            this.expirationDateProduct=expirationDateProduct;
            this.userProduct=userProduct;
            this.categoryProduct=categoryProduct;
            this.ReclamationsProduct=ReclamationsProduct;


        }

}
