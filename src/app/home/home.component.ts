import { CommonModule, DOCUMENT } from '@angular/common'
import { Inject, Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { bootstrapStarFill, bootstrapStar } from '@ng-icons/bootstrap-icons'
import { 
    heroCheck, 
    heroArrowRight, 
    heroTrophy, 
    heroUserGroup, 
    heroTv, 
    heroFilm, 
    heroHeart, 
    heroStar,
    heroShoppingCart
} from '@ng-icons/heroicons/outline'
import { Courses } from '../data/mock-courses'


@Component({
    standalone: true,
    providers: [
        provideIcons({
            heroCheck,
            heroArrowRight,
            heroTrophy,
            heroUserGroup,
            heroTv,
            heroFilm,
            heroHeart,
            heroStar,
            heroShoppingCart,
            bootstrapStarFill,
            bootstrapStar
        })
    ],
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [NgIconComponent, CommonModule]
})
export class HomeComponent {

    list = Courses;

    constructor(@Inject(DOCUMENT) private document: Document, title: Title) {
        title.setTitle('Mii | Mary');
    }
}