export class TestimonialModel {
  public title: string;
  public statement: string;
  public person: string;
  public company: string;

  constructor(
    title: string,
    statement: string,
    person: string,
    company: string
  ) {
    this.title = title;
    this.statement = statement;
    this.person = person;
    this.company = company;
  }
}
