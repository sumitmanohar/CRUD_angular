import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
   allData: any;
   CurrentData: any;
   firstname;
  lastname;
   email;
   mobilenumber;
   address;
  model: any = {};
  index: any;
  updateData: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this.getData();
  }

  OnSubmit(): any {
    if (this.updateData) {
      console.log("jefh");
      this.updateData.mobilenumber = this.mobilenumber;
      console.log(this.updateData.mobilenumber);
      console.log(this.index);
      this._http.updateDate(this.index, this.updateData.mobilenumber);
      this.updateData = "";
    } else {
      this.CurrentData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        mobilenumber: this.mobilenumber,
        address: this.address
      };
      this._http.setData(this.CurrentData);
    }

    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.mobilenumber = "";
    this.address = "";
  }
  // get data
  public getData(): any {
    this.allData = this._http.getData();

    console.log(this.allData);
  }

  //remove data
  remove(i): any {
    console.log(i);
    this._http.removeData(i);
  }

  //edit data
  edit(i, x): any {
    this.index = i;
    this.updateData = x;

    this.mobilenumber = this.updateData.mobilenumber;
  }
}
