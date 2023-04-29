export class Category {
    idCategory:number;
    nameCategory: String;
    descriptionCategory:String;
    archived:Boolean;

    constructor(idCategory:number,nameCategory: String,descriptionCategory:String,archived:Boolean){
        this.idCategory=idCategory;
        this.nameCategory=nameCategory;
        this.descriptionCategory=descriptionCategory;
        this.archived=archived;
    }
}
