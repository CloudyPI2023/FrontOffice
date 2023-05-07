import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/models/request';
import { AssociationRequestService } from '../association-request.service';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

 
  constructor(private requestService: AssociationRequestService,
    private route:ActivatedRoute,private router:Router) { }

  idAssociation:number;
  
  //listRequest:Request= new Request();
  listRequest: any;
  
  
  ngOnInit(): void {
    this.idAssociation = this.route.snapshot.params['idAssociation'];
    this.requestService.getListRequestByIdAssociation(this.idAssociation).subscribe(data => {
      this.listRequest = data;
    });
    
  }
}
