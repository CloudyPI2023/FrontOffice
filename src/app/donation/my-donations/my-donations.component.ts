import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.component.html',
  styleUrls: ['./my-donations.component.css']
})
export class MyDonationsComponent implements OnInit {

  donations: Donation[]; 
  idUser : number =1;
  constructor(private donationService: DonationService,
    private router:Router) { } 

  ngOnInit(): void {
    this.getDonations(this.idUser); 
  }

  private getDonations(idUser: number){
    this.donationService.getMyDonations(idUser).subscribe(data => {
      this.donations = data;
    });
  }

  deleteDonation(idDonation: number){
    this.donationService.deleteDonation(idDonation).subscribe(data =>{
      console.log(data);
      this.getDonations(this.idUser);
    })
  }


}
