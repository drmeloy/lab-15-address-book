const Entry = require('./Entry');

describe('Entry model', () => {
  it('requires a first name', () => {
    const entry = new Entry({
      lastName: 'Rock',
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.firstName.message).toEqual('Path `firstName` is required.');
  });

  it('requires a last name', () => {
    const entry = new Entry({
      firstName: 'Megaman',
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.lastName.message).toEqual('Path `lastName` is required.');
  });

  it('requires an address', () => {
    const entry = new Entry({
      name: 'Megaman.',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.address.message).toEqual('Path `address` is required.');
  });

  it('requires a city', () => {
    const entry = new Entry({
      name: 'Megaman.',
      address: '1234 Love St.',
      state: 'Oregon',
      country: 'United States',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.city.message).toEqual('Path `city` is required.');
  });

  it('requires a country', () => {
    const entry = new Entry({
      name: 'Megaman.',
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.country.message).toEqual('Path `country` is required.');
  });

  it('requires a country', () => {
    const entry = new Entry({
      name: 'Megaman.',
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.country.message).toEqual('Path `country` is required.');
  });

  it('requires a zipcode', () => {
    const entry = new Entry({
      name: 'Megaman.',
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.zipcode.message).toEqual('Path `zipcode` is required.');
  });
});
