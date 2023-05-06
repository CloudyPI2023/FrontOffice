import { Component, OnInit } from '@angular/core';
import { GiftService } from './gift.service';
import { Router } from '@angular/router';
import { Gift } from 'src/app/Models/ProductAndGiftManagement/gift';
import { Product } from 'src/app/Models/ProductAndGiftManagement/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gift-management',
  templateUrl: './gift-management.component.html',
  styleUrls: ['./gift-management.component.css']
})
export class GiftManagementComponent implements OnInit {

  constructor(router: Router,private gs:GiftService) { }

  idUser:number=1;
  mygifts!:Gift[];
  ngOnInit(): void {
    this.myGifts();
  }

 
  public myGifts() {
    this.gs.myGifts(this.idUser).subscribe(data => {
      this.mygifts = data;
    });
  }
  public removeProductFromGift(p:Product):void{
    this.gs.removeProductFromGift(1,p).subscribe(
      (response:any) => {
        console.log(response);
        this.myGifts();
      
      },
      (error: HttpErrorResponse) => {
        alert("error removing product from gift"+error.message);
      }
    );
  }
  

}
