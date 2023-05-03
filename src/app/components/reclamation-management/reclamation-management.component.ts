import { Component, OnInit } from '@angular/core';
import { ReclamationService } from './reclamation.service';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/Models/ProductAndGiftManagement/reclamation';

@Component({
  selector: 'app-reclamation-management',
  templateUrl: './reclamation-management.component.html',
  styleUrls: ['./reclamation-management.component.css']
})
export class ReclamationManagementComponent implements OnInit {

  constructor(router: Router,private rs:ReclamationService) { }

  myReclamations!:Reclamation[];
  idUser:number=1;

  ngOnInit(): void {
    this.getMyReclamations(1);
  }

  public getMyReclamations(idUser:number) {
    this.rs.getMyReclamations(1).subscribe(data => {
      this.myReclamations = data;
    });
  }

}
