export class Coursemodel {
  public image: string;
  public title: string;
  public date: string;
  public people: string;
  public location: string;
  public information: string;

  constructor(
    image: string,
    title: string,
    date: string,
    people: string,
    location: string,
    information: string
  ) {
    this.image = image;
    this.title = title;
    this.date = date;
    this.people = people;
    this.location = location;
    this.information = information;
  }
}
