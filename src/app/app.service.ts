import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  subjects: any[] =[]
  content: any[] =[]
  username: any = ''
  searchTerm: string =''
  constructor(public http: HttpClient ) { 
    this.http.get('../assets/subjects.json').subscribe((data:any)=>{
      this.subjects =data

      
  })
  
    
  }
 


getcontent(){
  return this.http.get('../assets/content.json')
  
}

cont(){
  return[
    {
      name:'maths'
    },
    {
      name:'science'
    }
  ]
}

language(){
  return[
    {
      lang: 'English'
    },
    {
      lang:'Hindi'
    }
  ]
}
 
}
