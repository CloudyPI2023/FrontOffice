import { Component, OnInit } from '@angular/core';
import { Association } from 'src/app/models/association';
import { AssociationService } from '../association.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {

  association: Association = new Association();

  constructor(private associationService: AssociationService,
    private router:Router) { } 

  ngOnInit(): void {
  }

  saveAssociation(){
    this.associationService.createAssociation(this.association).subscribe(data =>{
      console.log(data);
      this.goToAssociationsList();
    },
    error => console.log(error)
    
    );
  } 

  goToAssociationsList(){
    this.router.navigate(['/myAssociation']);
  }

  onSubmit(){
    console.log(this.association);
    this.saveAssociation();
  }


}
