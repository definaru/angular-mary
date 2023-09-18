import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PagesLayoutComponent } from './pages-layout/pages-layout.component'
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'
import { BusinessComponent } from '../business/business.component'
import { TeacherComponent } from '../teacher/teacher.component'
import { CoursesComponent } from '../courses/courses.component'
import { ContactsComponent } from '../contacts/contacts.component'
import { MenuComponent } from '../ui/header/menu.component'
import { FooterComponent } from '../ui/footer/footer.component'
import { bootstrapFacebook, bootstrapTwitter, bootstrapInstagram } from '@ng-icons/bootstrap-icons'
import { NgIconsModule } from '@ng-icons/core'
import { heroLanguage } from '@ng-icons/heroicons/outline'


const routes: Routes = [
    {
        path: '', 
        component: PagesLayoutComponent, 
        children: [
            { path: '', component: HomeComponent },
            //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
            { path: 'about', component: AboutComponent },
            { path: 'business', component: BusinessComponent },
            { path: 'teacher', component: TeacherComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'contacts', component: ContactsComponent }
        ]
    },
];

@NgModule({
    declarations: [
        MenuComponent,
        FooterComponent,
        PagesLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgIconsModule.withIcons({ heroLanguage, bootstrapFacebook, bootstrapTwitter, bootstrapInstagram }),
    ],
    exports: [
        RouterModule
    ]
})
export class PagesModule { }
