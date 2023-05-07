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
  idUser : number = 1;
  constructor(private donationService: DonationService,
    private router:Router) { } 

  ngOnInit(): void {
  }

  saveDonation(){
    this.donationService.addDonationByMail(this.donation,this.idUser ).subscribe(data =>{
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
    alert("Your is donation Added Successfully !");
    this.goToDonationsList();
  }


}
