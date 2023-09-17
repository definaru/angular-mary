import { DOCUMENT } from '@angular/common'
import { Inject, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | О нас');
    }
}
