import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';
import { ClubComponent } from './sorare/club/club/club.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/guards/authguard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login?redirectAfterLogin=:route', component: LoginComponent },
  { path: 'sorare/my-club', component: MyClubComponent, canActivate: [AuthGuard], data: {redirecTo: 'sorare/my-club'} },
  { path: 'sorare/club/:slug', component: ClubComponent, canActivate: [AuthGuard] },
  { path: 'angular-cheat-sheet', component: AngularCheatSheetComponent, canActivate: [AuthGuard] },
  { path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule), canActivateChild: [AuthGuard]},
  { path: '', component: MyClubComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
