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

  constructor(private donationService: DonationService,
    private router:Router) { } 

  ngOnInit(): void {
    this.getDonations(); 
  }

  private getDonations(){
    this.donationService.getDonationList().subscribe(data => {
      this.donations = data;
    });
  }

  deleteDonation(idDonation: number){
    this.donationService.deleteDonation(idDonation).subscribe(data =>{
      console.log(data);
      this.getDonations();
    })
  }


}
