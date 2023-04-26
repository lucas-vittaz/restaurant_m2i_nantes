import { Price } from "../enums/price";

export class Restaurant {
  id!: number;
  nom!: string;
  adresse!: string;
  typeId!: number;
  prix!: Price;

  // todo add orderList
  constructor(obj?: Partial<Restaurant>) {
    if (obj) {
      Object.assign(this, obj);
      console.log("Hello from Restaurant class" + this.id + this.nom + this.adresse + this.typeId + this.prix);
    }
  }

  enum_to_string() {
    switch (this.prix) {
      case Price.TRES_BON_MARCHE:
        return "Très bon marché";
      case Price.BON_MARCHE:
        return "Bon marché";
      case Price.CHER:
        return "Cher";
      case Price.TRES_CHER:
        return "Très cher";
      default:
        return "Inconnu";
    }
  }

}
