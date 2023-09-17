import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Sign Up');
    }
}