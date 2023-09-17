import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(@Inject(DOCUMENT) private document: Document, title: Title, private router: Router) {
        title.setTitle('Mii | Sign In');
    }

    routerOpen() {
        this.router.navigateByUrl('/sign-up');
    }
}