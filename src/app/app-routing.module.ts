import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';
import { ClubComponent } from './sorare/club/club/club.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sorare/my-club', component: MyClubComponent },
  { path: 'sorare/club/:slug', component: ClubComponent },
  { path: 'angular-cheat-sheet', component: AngularCheatSheetComponent },
  { path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)},
  { path: '', component: MyClubComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
