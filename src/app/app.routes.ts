import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Alltoys } from './alltoys/alltoys';
import { ToyInformations } from './toy-informations/toy-informations';
import { Cart } from './cart/cart';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Faq } from './faq/faq';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {path: 'alltoys', component: Alltoys},
    {path: 'toy/:id', component: ToyInformations},
    {path: 'cart', component: Cart},
    {path: 'about', component: About},
    {path: 'faq', component: Faq},


    
    {path: '**', redirectTo: ''}
];
