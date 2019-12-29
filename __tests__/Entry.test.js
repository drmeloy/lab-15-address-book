require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Entry = require('../lib/models/Entry');

describe('entry routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  let entry;
  beforeEach(async() => {
    entry = await Entry.create({
      firstName: 'Tester',
      lastName: 'McTesterton',
      address: '123 Test Dr.',
      city: 'Testville',
      state: 'Texas',
      country: 'United States',
      zipcode: '12345',
      groups: ['friends']
    });
  });

  it('creates a new entry', () => {
    return request(app)
      .post('/api/v1/entry')
      .send({
        firstName: 'Tester',
        lastName: 'McTesterton',
        address: '123 Test Dr.',
        city: 'Testville',
        state: 'Texas',
        country: 'United States',
        zipcode: '12345',
        groups: ['friends']
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          firstName: 'Tester',
          lastName: 'McTesterton',
          address: '123 Test Dr.',
          city: 'Testville',
          state: 'Texas',
          country: 'United States',
          zipcode: '12345',
          groups: ['friends'],
          __v: 0
        });
      });
  });

  it('finds all entries', () => {
    return request(app)
      .get('/api/v1/entry')
      .then(res => {
        expect(res.body).toEqual([{
          _id: entry.id,
          firstName: 'Tester',
          lastName: 'McTesterton',
          address: '123 Test Dr.',
          city: 'Testville',
          state: 'Texas',
          country: 'United States',
          zipcode: '12345',
          groups: ['friends'],
          __v: 0
        }]);
      });
  });

  it('finds an entry by id', () => {
    return request(app)
      .get(`/api/v1/entry/${entry.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: entry.id,
          firstName: 'Tester',
          lastName: 'McTesterton',
          address: '123 Test Dr.',
          city: 'Testville',
          state: 'Texas',
          country: 'United States',
          zipcode: '12345',
          groups: ['friends'],
          __v: 0
        });
      });
  });

  it('updates an entry by id', () => {
    return request(app)
      .patch(`/api/v1/entry/${entry.id}`)
      .send({ firstName: 'Megatest' })
      .then(res => {
        expect(res.body).toEqual({
          _id: entry.id,
          firstName: 'Megatest',
          lastName: 'McTesterton',
          address: '123 Test Dr.',
          city: 'Testville',
          state: 'Texas',
          country: 'United States',
          zipcode: '12345',
          groups: ['friends'],
          __v: 0
        });
      });
  });

  it('deletes an entry by id', () => {
    return request(app)
      .delete(`/api/v1/entry/${entry.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: entry.id,
          firstName: 'Tester',
          lastName: 'McTesterton',
          address: '123 Test Dr.',
          city: 'Testville',
          state: 'Texas',
          country: 'United States',
          zipcode: '12345',
          groups: ['friends'],
          __v: 0
        })
      })
  });
});