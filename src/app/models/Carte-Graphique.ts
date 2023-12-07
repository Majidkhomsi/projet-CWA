export class CarteGraphique {
  id: number = 0;
  nom: string | undefined;
  prix?: number ;
  description: string | undefined;
  marque: string | undefined;
  image: string | undefined; // Assurez-vous que cette propriété correspond à vos données
  quantite: number = 1;

  constructor(init?: Partial<CarteGraphique>) {
    Object.assign(this, init);
  }
}

