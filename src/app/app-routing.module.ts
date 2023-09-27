import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AngularCheatSheetComponent } from './angular-cheat-sheet/angular-cheat-sheet.component';
import { TestTechniqueComponent } from './test-technique/test-technique.component';
import { MyClubComponent } from './sorare/my-club/my-club.component';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'sorare/my-club', component: MyClubComponent },
  { path: 'angular-cheat-sheet', component: AngularCheatSheetComponent },
  // { path: 'test-technique', component: TestTechniqueComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', component: MyClubComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
