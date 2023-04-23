import { Product } from "./product";
import { User } from "./user";

export class Gift {
    idGift:number;
    beginsAtGift:Date;
    endsAtGift:Date;
    productsGift:Product[];
    userGift:User[];
    description:String;


    constructor(idGift:number, beginsAtGift:Date, endsAtGift:Date, productsGift:Product[], userGift:User[],description:String){
        this.idGift=idGift;
        this.beginsAtGift=beginsAtGift;
        this.endsAtGift=endsAtGift;
        this.productsGift=productsGift;
        this.userGift=userGift;
        this.description=description;
    }
}
