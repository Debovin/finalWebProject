import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {WomenPageComponent} from './women-page/women-page.component';
import {MenPageComponent} from './men-page/men-page.component';
import {KidsPageComponent} from './kids-page/kids-page.component';
import {WomanStoreComponent} from './woman-store/woman-store.component';
import {MenStoreComponent} from './men-store/men-store.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'women', component: WomenPageComponent},
      {path: 'men', component: MenPageComponent},
      {path: 'kids', component: KidsPageComponent},
      {path: 'store-woman', component: WomanStoreComponent},
      {path: 'store-men', component: MenStoreComponent},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
