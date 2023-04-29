export class User {
    idUser:number | undefined;
    firstName:String| undefined;;
    lastName:String| undefined;;
    email:String| undefined;;

    constructor(  idUser:number,firstName:String,lastName:String,email:string){
        this.idUser=idUser;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
}
