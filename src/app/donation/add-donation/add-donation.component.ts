import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'src/app/models/donation';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit {

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
    this.router.navigate(['/myDonations']);
  }

  onSubmit(){
    console.log(this.donation);
    this.saveDonation();
  }


}
