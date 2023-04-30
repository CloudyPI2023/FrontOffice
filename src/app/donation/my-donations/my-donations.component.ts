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

  donation: Donation = new Donation();

  constructor(private donationService: DonationService,
    private router:Router) { } 

  ngOnInit(): void {
  }

  saveDonation(){
    this.donationService.createDonation(this.donation).subscribe(data =>{
      console.log(data);
      this.goToDonationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToDonationsList(){
    this.router.navigate(['/donation']);
  }

  onSubmit(){
    console.log(this.donation);
    this.saveDonation();
  }


}
