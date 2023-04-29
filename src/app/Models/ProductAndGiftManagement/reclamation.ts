import { Product } from "./product";
import {User} from "./user"

export class Reclamation {
    idReclamation:number;
    descriptionReclamation:String;
    dateReclamation:String;
    archived:number;

    //NoSQL
    idUser:number;
    idProduct:number;

    userProduct:User;
    product:Product;


    constructor(  idReclamation:number,descriptionReclamation:String,dateReclamation:String, archived:number,
        idUser:number,idProduct:number, userProduct:User,product:Product){
                this.idReclamation=idReclamation;
                this.descriptionReclamation=descriptionReclamation;
                this.dateReclamation=dateReclamation;
                this.archived=archived;
                this.idUser=idUser;
                this.idProduct=idProduct;
                this.userProduct=userProduct;
                this.product=product;
        }
        

}
