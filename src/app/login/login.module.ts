import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { SignUpComponent } from '../sign-up/sign-up.component'
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component'

const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent, 
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'sign-up', component: SignUpComponent }
        ]
    },
];

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginModule { }
