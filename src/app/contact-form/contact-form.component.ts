import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor(public seriveData: UserDataService) {}

  @Input() userDetails: any;
  @Output() formValue: EventEmitter<any> = new EventEmitter();
  // @Output() closeFormBox : EventEmitter<any> = new EventEmitter()

  public userInfo: any = [];
  public closeFrom:boolean = true

  updateHandler() {
    this.seriveData.saveContactList().subscribe((res) => {
      this.formValue.emit({detail : res, closeForm : false});
    });
    this.closeFrom = false
    // this.closeFormBox(false)
    
  }

  ngOnChanges() {}

  ngOnInit(): void {
    this.seriveData.getRepos().subscribe((res) => {
      this.userInfo = res;
    });
  }
}
