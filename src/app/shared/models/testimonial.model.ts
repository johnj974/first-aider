export class TestimonialModel {
  public title: string;
  public statement: string;
  public person: string;
  public position: string;
  public company: string;

  constructor(
    title: string,
    statement: string,
    person: string,
    position: string,
    company: string
  ) {
    this.title = title;
    this.statement = statement;
    this.person = person;
    this.position = position;
    this.company = company;
  }
}
