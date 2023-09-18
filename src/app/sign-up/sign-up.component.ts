import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router'


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title, private router: Router) {
        title.setTitle('Mii | Sign Up');
    }

    routerOpen() {
        this.router.navigate(['/auth/login']);
    }
}