import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Alltoys } from './alltoys/alltoys';
import { ToyInformations } from './toy-informations/toy-informations';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'alltoys', component: Alltoys},
    { path: 'toy/:id', component: ToyInformations },
    { path: 'cart', component: Cart },


    
    {path: '**', redirectTo: ''}
];
