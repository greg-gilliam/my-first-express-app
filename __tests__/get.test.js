const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the dogs endpoint', async () => {
    const response = await request.get('/desserts');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the desserts endpoint', async ()=>{
    const response = await request.get('/desserts/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});
