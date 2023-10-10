import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  works:any[]=[]
  work:string=""
  updatedWork:string=''
  index:number=0;
  addWork(){
    this.works.push(this.work)
    this.work=""
  }

  delFunc(index:number){
    let result:boolean=confirm("Silmek istediginizden emin misiniz?")
    if(result){
      this.works.splice(index,1)
    }
   
  }

  editWork(index:number,work:string){
    this.updatedWork=work
    this.index=index
  }

  update(){
    this.works[this.index]=this.updatedWork
    
  }


}
