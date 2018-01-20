const app = require('../service');
import * as expect from 'expect';
import fetch from "node-fetch";
import * as http from "http";


describe("serverless lambda backend", () => {

  let server : http.Server;
  beforeEach(() => server = app.listen(8879));
  afterEach(() =>  server.close() );
  it('/banana should return : "this is fun!"', async () => {

    const res = await fetch("http://localhost:8879/tapuz");
    expect(await res.json()).toEqual(  {"banana": "life is shit and then you die ! "});

  })
});
