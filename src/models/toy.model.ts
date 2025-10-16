import { AgeGroup } from './ageGroup.model';
import { ToyType } from './toyType.model';

export interface Toy {
  toyId: number;
  name: string;
  permalink: string;
  description: string;
  targetGroup: string;
  productionDate: string;
  price: number;
  imageUrl: string;
  ageGroup: AgeGroup;
  type: ToyType;
  // status: 'reserved' | 'arrived' | 'cancelled';
}
