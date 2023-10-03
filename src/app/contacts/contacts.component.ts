import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroDevicePhoneMobile, heroEnvelopeOpen, heroMapPin } from '@ng-icons/heroicons/outline'
import { DOCUMENT } from '@angular/common'


@Component({
    standalone: true,
    imports: [NgIconComponent],
    providers: [provideIcons({ heroDevicePhoneMobile, heroEnvelopeOpen, heroMapPin })],
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
    // heroLanguage
})
export class ContactsComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Контакты');
    }
}