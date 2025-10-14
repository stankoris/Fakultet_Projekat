import axios from 'axios';
import { Toy } from '../models/toy.model';


const client = axios.create({
    baseURL: 'https://toy.pequla.com/',
    validateStatus: (status: number ) => status === 200,
    headers: {
        'Accept': 'application/json',
        'X-name': 'prodavnicaIgracaka2025'
    }   
})

export class ToyService {
  
  static async getAllToys() {
          return await client.get<Toy[]>('api/toy');  
      }
    
  static async getToysPictures(): Promise<string[]> {
  const response = await client.get<Toy[]>('api/toy');
  const toys = response.data;
  return toys.map(toy => `https://toy.pequla.com${toy.imageUrl}`);
}


  static async getToysPicturesIDs(): Promise<{ toyId: number; imageUrl: string }[]> {
  const response = await client.get<Toy[]>('api/toy');
  const toys = response.data;
  return toys.map(toy => ({
    toyId: toy.toyId,
    imageUrl: `https://toy.pequla.com${toy.imageUrl}`
  }));
}

}
