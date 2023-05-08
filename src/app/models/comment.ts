import {User} from "./user"
import { Article } from "./article";



export class Comment {

    idComment:number;
    descriptionComment:string;
    dateComment:Date;
  //  userComment:User;
    articleComment:Article;

    constructor(descriptionComment: string) {
        this.descriptionComment = descriptionComment;
      }
}
