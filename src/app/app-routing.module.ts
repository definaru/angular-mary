import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { CommonModule } from '@angular/common'


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../app/login/login.module').then(value => value.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('../app/pages/pages.module').then(value => value.PagesModule)
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }