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

    it("should fetch data with articles and with authors",async () => {
        const res = await fetch("http://localhost:8879/data");
        let json = await res.json();
        expect(json).toEqual(  {
            "data": {
                "articles": [
                    {
                        "_id": "5a61b40a81e73a3cddf9f93a",
                        "title": "Introducing React's Error Code System",
                        "date": "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
                        "authorId": "2c6aa2cfe3449467d329fa17d6ea230f",
                        "body": "Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire."
                    },
                    {
                        "_id": "5a61b4af81e73a3cddf9f93d",
                        "id": "2",
                        "title": "Mixins Considered Harmful",
                        "date": "Wed Jul 13 2016 00:00:00 GMT+0000 (UTC",
                        "authorId": "78ae672985c41fae0ecde0133f41bbfa",
                        "body": "“How do I share the code between several components?” is one of the first questions that people ask when they learn React. Our answer has always been to use component composition for code reuse. You can define a component and use it in several other components. \\nIt is not always obvious how a certain pattern can be solved with composition. React is influenced by functional programming but it came into the field that was dominated by object-oriented libraries. It was hard for engineers both inside and outside of Facebook to give up on the patterns they were used to."
                    },
                    {
                        "_id": "5a61b4ee81e73a3cddf9f93e",
                        "id": "3",
                        "title": "Create Apps with No Configuratio",
                        "date": "Fri Jul 22 2016 00:00:00 GMT+0000 (UTC)",
                        "authorId": "78ae672985c41fae0ecde0133f41bbfa",
                        "body": "Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration. \\n\\nGetting Starte \\nInstallation \\nFirst, install the global package"
                    },
                    {
                        "_id": "5a61b51e81e73a3cddf9f93f",
                        "id": "4",
                        "title": "Relay: State of the State",
                        "date": "Fri Aug 05 2016 00:00:00 GMT+0000 (UTC)",
                        "authorId": "335fb02ec8f76c8515821ac9f266d276",
                        "body": "This month marks a year since we released Relay and we'd like to share an update on the project and what's next. \\nA Year In Review \\nA year after launch, we're incredibly excited to see an active community forming around Relay and that companies such as Twitter are using Relay in production"
                    },
                    {
                        "_id": "5a61b55181e73a3cddf9f940",
                        "id": "5",
                        "title": "React v15.5.0",
                        "date": "Fri Apr 07 2017 00:00:00 GMT+0000 (UTC)",
                        "authorId": "d85577ea34ae50f2dac5347b5219aa23",
                        "body": "It's been exactly one year since the last breaking change to React. Our next major release, React 16, will include some exciting improvements, including a complete rewrite of React's internals. We take stability seriously, and are committed to bringing those improvements to all of our users with minimal effort.\\n To that end, today we're releasing React 15.5.0"
                    }
                ],
                "authors": [
                    {
                        "_id": "5a61b5a081e73a3cddf9f941",
                        "id": "d85577ea34ae50f2dac5347b5219aa23",
                        "firstName": "andrew",
                        "lastName": "clark",
                        "website": "https://twitter.com/acdlite"
                    },
                    {
                        "_id": "5a61b66881e73a3cddf9f942",
                        "id": "2c6aa2cfe3449467d329fa17d6ea230f",
                        "firstName": "Keyan",
                        "lastName": "Zhang",
                        "website": "https://twitter.com/keyanzhang"
                    },
                    {
                        "_id": "5a61b67f81e73a3cddf9f943",
                        "id": "78ae672985c41fae0ecde0133f41bbfa",
                        "firstName": "Dan",
                        "lastName": "Abramov",
                        "website": "https://twitter.com/dan_abramov"
                    },
                    {
                        "_id": "5a61b69981e73a3cddf9f944",
                        "id": "335fb02ec8f76c8515821ac9f266d276",
                        "firstName": "Joseph",
                        "lastName": "Savona",
                        "website": "https://twitter.com/en_JS"
                    }
                ]
            }
        });
  })
});
