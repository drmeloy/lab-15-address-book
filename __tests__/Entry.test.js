const mongoose = require('mongoose');
const Entry = require('../lib/models/Entry');

describe('Entry model', () => {
  it('requires a name', () => {
    const entry = new Entry({
      address: '1234 Love St.',
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      zipcode: '97202',
      group: 'friends'
    });

    const { errors } = entry.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
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