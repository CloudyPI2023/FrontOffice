import { Component, OnInit } from '@angular/core';
import { Association } from 'src/app/models/association';
import { AssociationService } from '../association.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-association',
  templateUrl: './my-association.component.html',
  styleUrls: ['./my-association.component.css']
})
export class MyAssociationComponent implements OnInit {
  idUser: number = 1;
  associations: Association[]; 

  constructor(private associationService: AssociationService,
    private router:Router) { } 

  ngOnInit(): void {
    this.getAssociations(); 
  }

  private getAssociations(){
    this.associationService.getMyAssociationsList(this.idUser).subscribe(data => {
      this.associations = data;
    });
  }

  deleteAssociation(idAssociation: number){
    this.associationService.deleteAssociation(idAssociation).subscribe(data =>{
      console.log(data);
      this.getAssociations();
    })
  }

  TakeDonation(idAssociation: number){
    this.router.navigate(['donation', idAssociation]);
  }
  AddRequest(idAssociation: number){
    this.router.navigate(['addRequest', idAssociation]);
  }


}
