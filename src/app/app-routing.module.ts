import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent },
    { path: 'secondo', component: SecondoComponent },
    { path: 'ciclovita', component: CiclovitaComponent },
    { path: '', redirectTo: '/primo', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class ProvaRoutingModule { }
