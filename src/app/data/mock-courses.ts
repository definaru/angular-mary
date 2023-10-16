export interface List {
    id: number;
    image?: string;
    name: string;
    level: string;
    author: string;
    stars: number;
    reviews: number;
    price: number | string;
}

export const Courses: List[] = [
    { 
        id: 12, 
        image: '/assets/image/course/course-javascript.jpg', 
        name: 'How to easily create a website with JavaScript', 
        level: 'Intermediate', 
        author: 'Claire Evans', 
        stars: 4.5, 
        reviews: 9300, 
        price: 39 
    },
    { 
        id: 13, 
        image: '/assets/image/course/course-css.jpg', 
        name: 'CSS: ultimate CSS course from beginner to advanced', 
        level: 'Beginner', 
        author: 'Carolyn Welborn', 
        stars: 4.5, 
        reviews: 8890, 
        price: 30 
    },
    { 
        id: 14, 
        image: '/assets/image/course/course-gatsby.jpg', 
        name: 'The Gatsby Course: build web application', 
        level: 'Intermediate', 
        author: 'Floyd Amall', 
        stars: 4.5, 
        reviews: 13245, 
        price: 34 
    },
    { 
        id: 15, 
        image: '/assets/image/course/course-wordpress.jpg', 
        name: 'WordPress: introduction to wordpress for beginners', 
        level: 'Advance', 
        author: 'Victor Elliott', 
        stars: 4.5, 
        reviews: 9300, 
        price: 39 
    },
    { 
        id: 16, 
        image: '/assets/image/course/course-react.jpg', 
        name: 'How to easily create a website with React', 
        level: 'Intermediate', 
        author: 'Morris Mccoy', 
        stars: 4.5, 
        reviews: 7700, 
        price: 29 
    },
    { 
        id: 17, 
        image: '/assets/image/course/course-graphql.jpg', 
        name: 'GraphQL: introduction to graphQL for beginners', 
        level: 'Beginner', 
        author: 'Michael Cundiff', 
        stars: 5, 
        reviews: 9300, 
        price: 'Free' 
    },
    { 
        id: 18, 
        image: '/assets/image/course/course-angular.jpg', 
        name: 'Angular - the complete guide for beginner', 
        level: 'Advance', 
        author: 'Jeffrey McCoy', 
        stars: 5, 
        reviews: 8890, 
        price: 49 
    },
    { 
        id: 19, 
        image: '/assets/image/course/course-python.jpg', 
        name: 'The Python Course: build web application', 
        level: 'Beginner', 
        author: 'Douglas Howell', 
        stars: 5, 
        reviews: 13245, 
        price: 19 
    }
];