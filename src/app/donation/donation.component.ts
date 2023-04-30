import { Component, OnInit } from '@angular/core';
import { Donation } from '../models/donation';
import { DonationService } from './donation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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
  public onAddDonation(addForm: NgForm): void {
    document.getElementById('add-Donation-form')!.click();
    this.donationService.createDonation(addForm.value).subscribe(
      (response: Donation) => {
        console.error
        console.log(response);
        this.getDonations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


   ///les interfaces : crud Donation
  public onOpenModal(donation: Donation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addDonationModal');
    }
    
  
    container?.appendChild(button);
    button.click();
  }







}
