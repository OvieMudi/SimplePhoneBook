import PhoneBook from './classes/PhoneBook';

const phoneBook = new PhoneBook();

phoneBook.createContact({
  number: '07036727722',
  name: 'Skywalker',
  email: 'good@guy.com'
});

phoneBook.createContact({
  number: '07036727723',
  name: 'Jabba',
  email: 'snitchy@thing.com'
});

const contacts = phoneBook.searchPhoneBook('snitch')

console.log('contacts', contacts.map(c => c.toJSON()))
