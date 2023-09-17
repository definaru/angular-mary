import { DOCUMENT } from '@angular/common'
import { Inject, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroAcademicCap, heroUserGroup, heroPresentationChartLine } from '@ng-icons/heroicons/outline'

@Component({
    standalone: true,
    imports: [NgIconComponent],
    providers: [provideIcons({ heroAcademicCap, heroUserGroup, heroPresentationChartLine })],
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | О нас');
    }
}
