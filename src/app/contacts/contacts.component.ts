import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Контакты');
    }
}