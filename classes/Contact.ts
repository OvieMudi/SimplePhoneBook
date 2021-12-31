import IContactInput from '../interfaces/contactInput';

export default class Contact {
  private number: string;
  private name: string;
  private email: string;
  private readonly dateCreated: Date = new Date();

  constructor(input: IContactInput) {
    this.number = input.number;
    this.name = input.name;
    this.email = input.email || '';
  }

  public getNumber(): string {
    return this.number;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getDateCreated(): Date {
    return this.dateCreated;
  }

  public setPhone(number: string): void {
    this.number = number;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public toString(): string {
    return `
    ${this.name}
    - ${this.number}
    - ${this.email}
    - ${this.dateCreated}`;
  }

  public toObject(): IContactInput {
    return {
      number: this.number,
      name: this.name,
      email: this.email,
    };
  }

  public toJSON(): string {
    return JSON.stringify(this.toObject());
  }
}
