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
  
  // funkcija koja vraca sve igracke (objekte)
  static async getAllToys() {
          return await client.get<Toy[]>('api/toy');  
      }
    
  // funkcija koja vraca samo id i imageurl
  static async getToysPicturesIDs() {
  const response = await this.getAllToys();
  const toys = response.data;
  return toys.map(toy => ({
    toyId: toy.toyId,
    imageUrl: `https://toy.pequla.com${toy.imageUrl}`
  }));
}

}
