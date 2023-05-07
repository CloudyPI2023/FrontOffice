import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from '../models/association';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociationService } from '../association/association.service';

@Component({
  selector: 'app-association-requests',
  templateUrl: './association-requests.component.html',
  styleUrls: ['./association-requests.component.css']
})
export class AssociationRequestsComponent implements OnInit {

  idAssociation: number;
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
  
  listRequests(idAssociation: number){
    this.router.navigate(['listRequests', idAssociation]);
  }


}
