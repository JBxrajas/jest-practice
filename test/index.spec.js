import { response } from 'express';
import app from '../src/app.js';
import request from 'supertest';

describe('GET /tasks', () => {
  test('should return pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });

  test('should return tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.text).toBe('[]');
  });

  test('should respond a json', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
});

describe('POST /tasks', () => {
  describe('when sending title and description', () => {
    const newTask = {
      title: 'Test Task',
      description: 'Test description'
    };

    test('should respond 200', async () => {
      await request(app).post('/tasks').send(newTask).expect(200);
    });

    test('should have application/json content-type', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.headers['content-type']).toMatch(/json/);
    });

    test('Verify ID on post', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  describe('When title or description is missing', () => {
    fields = [
      { title: 'Only title' },
      { description: 'Only description' },
      {}
    ];
    fields.forEach(field => {
      test(`should respond 400 status code when sending ${JSON.stringify(field)}`, async () => {
        const response = await request(app).post('/tasks').send(field);
        expect(response.status).toBe(400);
      });       
    });
    
  });
});