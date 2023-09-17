import { Title } from '@angular/platform-browser'
import { Inject, Component } from '@angular/core'
import { DOCUMENT } from '@angular/common'


@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Преподавателям');
    }
}
