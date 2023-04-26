import { Component, OnInit } from '@angular/core';
import { Association } from '../models/association';
import { AssociationService } from '../association/association.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {

  associations: Association[];
  public detailsAssociation?: Association;
  constructor(private associationService: AssociationService) { }

  ngOnInit(): void {
    this.getAssociations();
  }
  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => { 
      this.associations = data;
    });
   
  } 


  public OnDetailsAssociation(idAssociation: number){
    this.associationService.getAssociationById(idAssociation).subscribe(
      (response: Association) => {
        console.log(response);
      });
  }

  
  public onOpenModal(association: Association, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   
    if (mode === 'detail') {
  
      button.setAttribute('data-target', '#detailAssociationModal');
    }
  
    container?.appendChild(button);
    button.click();
  }

 


}
