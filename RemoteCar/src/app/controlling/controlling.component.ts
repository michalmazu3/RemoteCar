import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime} from 'rxjs/operators';

import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  styleUrls: ['./controlling.component.scss'],
})
export class ControllingComponent implements OnInit {

  isMoving = false;
  ipAddress: string;

  constructor(private httpClient: HttpClient , route : ActivatedRoute) {
    this.ipAddress = route.snapshot.paramMap.get('val');


   }

  ngOnInit() {}


  move( val : string){

    this.isMoving = true;
    switch(val){
      case "up":{
        this.httpClient.get(`${this.ipAddress}/control/forward`).subscribe();
        break;
      }
      
      case "down":{
        this.httpClient.get(`${this.ipAddress}/control/backward`).subscribe();
        break;
      }
      
      case "left":{

        this.httpClient.get(`${this.ipAddress}/control/left`).subscribe();

        break;
      }
      
      case "right":{
        this.httpClient.get(`${this.ipAddress}/control/right`).subscribe();

        break;
      }
      
      case "upleft":{
        this.httpClient.get(`${this.ipAddress}/control/forwardleft`).subscribe();

        break;
      }
      
      case "upright":{
        this.httpClient.get(`${this.ipAddress}/control/forwardright`).subscribe();

        break;
      }
      
      case "downleft":{
        this.httpClient.get(`${this.ipAddress}/control/backwardleft`).subscribe();

        break;
      }
      
      case "downright":{
        this.httpClient.get(`${this.ipAddress}/control/backwardright`).subscribe();

        break;
      }
    }

 
  }

}
