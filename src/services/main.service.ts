import axios from 'axios';
import { AllToysModel } from '../models/allToys.model';

const client = axios.create({
    baseURL: './test.json',
    validateStatus: (status: number ) => status === 200,
    headers: {
        'Accept': 'application/json',
        'X-name': 'prodavnicaIgracaka2025'

    }   
})

export class AllToysService {
    static async getAllToys() {
        return await client.get<AllToysModel[]>('');  
    }
}