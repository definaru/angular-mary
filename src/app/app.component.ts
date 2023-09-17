import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public href: string = '';
    date = new Date()
    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url
    }
}
