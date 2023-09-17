import { DOCUMENT } from '@angular/common'
import { Inject, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroCheck, heroArrowRight, heroTrophy, heroUserGroup, heroTv, heroFilm } from '@ng-icons/heroicons/outline'

@Component({
    standalone: true,
    imports: [NgIconComponent],
    providers: [provideIcons({ heroCheck, heroArrowRight, heroTrophy, heroUserGroup, heroTv, heroFilm })],
    selector: 'app-home',
    templateUrl: './home.component.html',
    //styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Mary');
    }
}