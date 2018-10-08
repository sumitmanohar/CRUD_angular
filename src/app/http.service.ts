import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
   Data:any[]=[]
   
  constructor() { }
 
// get data
  getData(){
    console.log(this.Data)
    return this.Data
    }
    //edit data
    updateDate(i,x){
      this.Data[i].mobilenumber=x
    }
    //set data
  setData(currentData){
    this.Data.push(currentData)
    console.log(this.Data)
   }
   //remove data
  removeData(i){
    this.Data.splice(i, 1);
  }
 

}
