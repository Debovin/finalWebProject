import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router,
              private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Admin');
  }
  logout($event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);

  }
}
