import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { BusinessComponent } from './business/business.component'
import { TeacherComponent } from './teacher/teacher.component'
import { CoursesComponent } from './courses/courses.component'
import { ContactsComponent } from './contacts/contacts.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
    { path: '', component: HomeComponent }, // redirectTo: '/', pathMatch: 'full'
    { path: 'about', component: AboutComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }