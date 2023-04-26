import { Component, OnInit } from '@angular/core';
import { Association } from '../models/association';
import { AssociationService } from './association.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  associations: Association[];
  constructor(private associationService: AssociationService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAssociations();
  }
  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => { 
      this.associations = data;
    });
   
  } 

  detailAssociation(idAssociation : number){
    this.router.navigate(['association', idAssociation]);
  }

}
