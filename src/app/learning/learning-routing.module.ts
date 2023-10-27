import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgrxComponent } from "./ngrx/ngrx.component";

const routes: Routes= [
    { path: '', component: NgrxComponent},
    { path: 'ngrx', component: NgrxComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LearningRoutingModule { }