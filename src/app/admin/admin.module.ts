import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DatabaseComponent } from './database/database.component';
import { AddPageComponent } from './add-page/add-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../shared/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'database', component: DatabaseComponent, canActivate: [AuthGuard]},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
        ]}
    ])
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, LoginPageComponent, DatabaseComponent, AddPageComponent]
})

export class AdminModule{
}
