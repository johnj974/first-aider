export class Coursemodel {
  public image: string;
  public title: string;
  public date: Date;
  public time: string;
  public people: string;
  public location: string;
  public information: string;

  constructor(
    image: string,
    title: string,
    date: Date,
    time: string,
    people: string,
    location: string,
    information: string
  ) {
    this.image = image;
    this.title = title;
    this.date = date;
    this.time = time;
    this.people = people;
    this.location = location;
    this.information = information;
  }
}
