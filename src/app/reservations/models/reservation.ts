import { ReservationI } from '../interfaces/reservation-i';

export class Reservation implements ReservationI {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public telephone!: string;
  public dateHeureDebut!: string;
  public restaurantId!: number;

  constructor(obj?: Partial<Reservation>) {
    if (obj) {
      Object.assign(this, obj);
      console.log(
        'Hello from Reservation class' + this.id + this.nom + this.restaurantId
      );
    }
  }
}
