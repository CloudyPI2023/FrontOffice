import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { AssociationRequestService } from '../association-request.service';
import { Router } from '@angular/router';
import { Association } from 'src/app/models/association';
import { AssociationService } from 'src/app/association/association.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  associationList: Association[];
  request: Request = new Request();

  constructor(private associationRequestService: AssociationRequestService,private associationService: AssociationService,
    private router:Router) { } 

  ngOnInit(): void {
    this.getAssociations();
  }

  saveAssociationRequest(){
    this.associationRequestService.createRequest(this.request).subscribe(data =>{
      console.log(data);
     // this.goToAssociationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToAssociationsList(){
    this.router.navigate(['/myAssociation']);
  }

  onSubmit(){
    console.log(this.request);
    this.saveAssociationRequest();
  }

  private getAssociations(){
    this.associationService.getAssociationList().subscribe(data => {
      this.associationList = data;
    });
  }


}
