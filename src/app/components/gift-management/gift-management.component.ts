import { Component, OnInit } from '@angular/core';
import { GiftService } from './gift.service';
import { Router } from '@angular/router';
import { Gift } from 'src/app/Models/ProductAndGiftManagement/gift';

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

}
