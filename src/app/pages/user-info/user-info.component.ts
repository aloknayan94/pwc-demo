import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userDetailArray: any[] = [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.userDataService.getUserDetails().subscribe((response: any) => {
      this.userDetailArray = response;
    });
  }
}
