const request = require('supertest');
const server = require('../server');

describe('testing initial request with address field', () => {
    const address = {
        query: {
            address: 'Bristol'
        }
    }
    const noAddress = {
        query: {
            address: ''
        }
    }
    test('it should respond with 200 success', async () => {
        const response = await request(server)
        .get('/weather')
        .send(address)
        .expect(200);

    })
    test('it should catch missing address property', async () => {
        const response = await request(server)
        .get('/weather')
        .send(noAddress);
        expect(response.body).toStrictEqual({
            error: 'you must enter a valid address'
        })
    })

})