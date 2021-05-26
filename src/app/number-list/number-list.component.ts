import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css'],
})
export class NumberListComponent implements OnInit {
  constructor(private list: UserDataService) {}
  public phoneList: any = [];

  @Output() getData: EventEmitter<any> = new EventEmitter();
  @Input() sendUserData: any;

  showDetailHandler(i: number) {
    this.getData.emit(i);
  }

  ngOnChanges() {
    this.phoneList.push(this.sendUserData);
  }

  deleteHandler(id: number) {
    this.list.deleteUser(id).subscribe((res) => {
      this.getAllData();
    });
  }

  getAllData() {
    this.list.getRepos().subscribe((res) => {
      this.phoneList = res;
    });
  }

  ngOnInit(): void {
    this.getAllData();
  }
}
