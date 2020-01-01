require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Entry = require('../lib/models/Entry');
const User = require('../lib/models/User');

describe('entry routes', () => {
  let agent;
  beforeAll(async() => {
    connect();
    
    agent = request.agent(app);

    await User
      .create({
        name: 'Megaman',
        email: 'mega@man.com',
        password: 'somega'
      });

    await agent
      .post('/api/v1/auth/login')
      .send({
        email:'mega@man.com',
        password: 'somega'
      });
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

  it('requires authorization to post', () => {
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
        expect(res.statusCode).toEqual(500);
      });
  });

  it('creates a new entry', async() => {
    return agent
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
          userId: expect.any(String),
          __v: 0
        });
      });
  });

  it('requires authorization to get', () => {
    return request(app)
      .get('/api/v1/entry')
      .then(res => {
        expect(res.statusCode).toEqual(500);
      });
  });

  it('finds all entries', async() => {
    return agent
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
      .then(() => {
        return agent
          .get('/api/v1/entry')
          .then(res => {
            expect(res.body).toEqual([{
              _id: expect.any(String),
              firstName: 'Tester',
              lastName: 'McTesterton',
              address: '123 Test Dr.',
              city: 'Testville',
              state: 'Texas',
              country: 'United States',
              zipcode: '12345',
              groups: ['friends'],
              userId: expect.any(String),
              __v: 0
            }]);
          });
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