export class ProductModel {
  public title: string;
  public image: string;
  public description: string;
  public cost: string;

  constructor(title: string, image: string, description: string, cost: string) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.cost = cost;
  }
}
