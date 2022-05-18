import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subjects:any[] =[]
  // contnets : any[] []
 
  constructor( public service: AppService) {
    
    this.subjects= this.service.subjects
    console.log(this.service.subjects);
     
    
     
  }

  logOut(){
    this.service.username = '';
  }

  ngOnInit(): void {
    this.content=this.service.cont()
    console.log(this.content);
    

    this.language = this.service.language()
    console.log(this.language);
    
  }

  content: any=[]
  language : any= []


}
