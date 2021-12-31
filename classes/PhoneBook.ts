import Contact from './Contact';
import IContactInput from '../interfaces/contactInput';

export default class PhoneBook {
  private contacts = new Map<string, Contact>();

  public getContacts(): Contact[] {
    return Array.from(this.contacts.values());
  }

  public createContact(input: IContactInput): Contact {
    const isUnique = this.validateUniquePhoneNumber(input.number);
    if (!isUnique) {
      throw new Error('Contact already exists');
    }
    const contact = new Contact(input);
    this.contacts.set(input.number, contact);
    return contact;
  }

  public getContactByPhoneNumber(number: string): Contact {
    const contact = this.contacts.get(number);
    if (!contact) {
      throw new Error('Contact not found')
    }
    return contact;
  }

  public getContactsByName(name: string): Contact[] {
    return Array.from(this.contacts.values()).filter((contact) => contact.getName() === name);
  }

  public getContactsByEmail(email: string): Contact[] {
    return Array.from(this.contacts.values()).filter((contact) => contact.getEmail() === email);
  }

  // Complexity: O(mn)
  public searchPhoneBook(searchTerm: string): Contact[] {
    const contacts = Array.from(this.contacts.values());
    return contacts.filter(
      (contact) =>
        contact.getName().includes(searchTerm) ||
        contact.getEmail().includes(searchTerm) ||
        contact.getNumber().includes(searchTerm)
    );
  }

  public validateUniquePhoneNumber(number: string): boolean {
    return !this.contacts.has(number);
  }
}
