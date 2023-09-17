import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'


@Component({
    selector: 'app-business',
    templateUrl: './business.component.html',
    styleUrls: ['./business.component.css']
})
export class BusinessComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii for Business');
    }
}
