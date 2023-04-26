import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Association } from 'src/app/models/association';
import { AssociationService } from '../association.service';

@Component({
  selector: 'app-association-detail',
  templateUrl: './association-detail.component.html',
  styleUrls: ['./association-detail.component.css']
})
export class AssociationDetailComponent implements OnInit {

  idAssociation:number;
  association:any; 

  constructor(private associationService:AssociationService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idAssociation = this.route.snapshot.params['idAssociation'];
    this.associationService.getAssociationById(this.idAssociation).subscribe(data =>{
      this.association = data;
    }, error => console.log(error));
  }

}
