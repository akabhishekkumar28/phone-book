import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'phonebook';
  public number = null;
  public showAddForm = false
  public newUser = ''

  addNewContact(){
    this.showAddForm = !this.showAddForm
  }

  formValue(userDetail:any){
    this.newUser = userDetail.detail
    this.showAddForm = userDetail.closeForm
  }
  
  getData(data: any) {
    this.number = data;
  }
}
