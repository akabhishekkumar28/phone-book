import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userList: UserDataService) {}
  @Input() index: any;

  user: any = [];
  public toggleForm = false;
  public showUserInfo = false;
  public updateRef = ''

  showHideFormBtn(user:any) {
    this.updateRef = user
    this.toggleForm = !this.toggleForm;
  }
  ngOnChanges() {
    if (this.user.length !== 0) {
      this.showUserInfo = true;
    }
  }
  ngOnInit(): void {
    this.userList.getRepos().subscribe(res =>{
      this.user = res
    })
  }
}
