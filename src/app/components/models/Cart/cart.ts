export class Cart {
    idCommand!: number | undefined;
    statusCommand: string = "En cours";
    dateCommand: Date | undefined;
    shippingAddressCommand: string | undefined;
    idUser: number | undefined;
    deliveryPersonId: number | undefined;
    purchaseCommandId: number | undefined;
    dateLivraison: Date | undefined;
    notes: string | undefined;
    productList: number[] = [];
  
    constructor(data: Partial<Cart> = {}) {
      Object.assign(this, data);
    }
  }
  