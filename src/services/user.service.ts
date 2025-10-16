import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import axios from 'axios';

const client = axios.create({
    baseURL: '/usersData.json',
    validateStatus: (status: number ) => status === 200,
    headers: {
        'Accept': 'application/json',
        'X-name': 'prodavnicaIgracaka2025'
    }   
})

@Injectable({
  providedIn: 'root'
})

export class UserService {
    protected loggedIn = signal(false);

static async getAllUsers() {
          return await client.get<User[]>('');  
      }

  login(): void {
    this.loggedIn.set(true);
  }

  logout(): void {
    this.loggedIn.set(false);
  }

  isLoggedIn() {
    return this.loggedIn();
  }
}