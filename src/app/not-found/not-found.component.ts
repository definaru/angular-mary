import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroExclamationTriangle } from '@ng-icons/heroicons/outline'


@Component({
    standalone: true,
    imports: [NgIconComponent],
    providers: [provideIcons({ heroExclamationTriangle })],
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Страница не найдена');
    }
}