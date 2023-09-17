import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './ui/header/menu.component'
import { FooterComponent } from './ui/footer/footer.component'
import { NgIconsModule } from '@ng-icons/core'
import { heroLanguage } from '@ng-icons/heroicons/outline'
import { bootstrapFacebook, bootstrapTwitter, bootstrapInstagram } from '@ng-icons/bootstrap-icons'


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgIconsModule.withIcons({ heroLanguage, bootstrapFacebook, bootstrapTwitter, bootstrapInstagram }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    //exports: []
})
export class AppModule { }
