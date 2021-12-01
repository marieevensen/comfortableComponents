import Todo from './views/Todo.vue';
import Table from './views/Table.vue';
import Quiz from './views/Quiz.vue';
import Form from './views/Form.vue';
import Slideshow from './views/Slideshow.vue';
import Home from './views/Home.vue';


export default [
    { name: 'todo', path: '/todo', component: Todo },
    { name: 'table', path: '/table', component: Table },
    { name: 'quiz', path: '/quiz', component: Quiz },
    { name: 'form', path: '/form', component: Form },
    { name: 'slideshow', path: '/slideshow', component: Slideshow },
    { name: 'home', path: '/', component: Home}
]

// dette er en test komentar :)