import { Component, OnInit } from '@angular/core';
import {RestService} from '../../shared/rest.service';
import {Users} from '../../shared/Users';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  constructor(private rs: RestService) { }

  columns = ['User ID', 'First Name', 'Last Name', 'Email', 'Mobile'];
  index = ['id', 'firstName', 'lastName', 'email', 'mobile'];
  users: Users[] = [];
  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response) =>
      {
        this.users = response;
      },
      (error) => {
        console.log('Error Occured: ');
      }
    );
  }

}
