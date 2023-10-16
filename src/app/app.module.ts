import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
//import { RaitingPipe } from './pipes/raiting.pipe'


@NgModule({
    declarations: [
        //RaitingPipe,
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule 
    ],
    providers: [],
    bootstrap: [AppComponent],
    //exports: [RaitingPipe]
})
export class AppModule { }
