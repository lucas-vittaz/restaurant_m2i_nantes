import { TypeRestaurantI } from '../interfaces/type-restaurant-i';

export class TypeRestaurant implements TypeRestaurantI {
  public id!: number;
  public nom!: string;

  constructor(obj?: Partial<TypeRestaurant>) {
    if (obj) {
      Object.assign(this, obj);
      console.log('Hello from TypeRestaurant class' + this.id + this.nom);
    }
  }
}
