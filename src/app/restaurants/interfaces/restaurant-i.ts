import { Price } from "../enums/price";

export interface RestaurantI {
  id: number;
  nom: string;
  adresse: string;
  typeId: number;
  prix: Price;
}
