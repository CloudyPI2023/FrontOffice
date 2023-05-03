import {Category} from "./category"
import {User} from "./user"
import { Reclamation } from "./reclamation";



export class Product {
    public idProduct!:number ;
    public referenceProduct!:String;
    public nameProduct!:String;
    public imageProduct!:String;
    public descriptionProduct!:String ;
    public priceProduct!:number ;
    public quantityProduct!:number;
    public expired!:number;
    public  expirationDateProduct!:Date ;
    public userProduct!:User[] ;
    public categoryProduct!:Category[] ;
    public ReclamationsProduct!:Reclamation[];
    public creationDate!:Date;

    /*constructor( idProduct:number,referenceProduct:String,nameProduct:String, imageProduct:String, descriptionProduct:String,
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


        }*/

}
