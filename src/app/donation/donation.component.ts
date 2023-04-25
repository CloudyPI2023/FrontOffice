import { Component, OnInit } from '@angular/core';
import { Donation } from '../models/donation';
import { DonationService } from './donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

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
}
