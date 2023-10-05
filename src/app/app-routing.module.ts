import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';

const routes: Routes = [
  { path: 'sorare/my-club', component: MyClubComponent },
  { path: 'angular-cheat-sheet', component: AngularCheatSheetComponent },
  { path: '', component: MyClubComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
