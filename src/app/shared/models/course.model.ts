export class Coursemodel {
  public image: string;
  public title: string;
  public date: Date;
  public time: string;
  public people: string;
  public duration: string;
  public location: string;
  public information: string;
  public price: string;

  constructor(
    image: string,
    title: string,
    date: Date,
    time: string,
    people: string,
    duration: string,
    location: string,
    information: string,
    price: string
  ) {
    this.image = image;
    this.title = title;
    this.date = date;
    this.time = time;
    this.people = people;
    this.duration = duration;
    this.location = location;
    this.information = information;
    this.price = price;
  }
}
