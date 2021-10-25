describe("Search for a word at specific url", ()=>{
    const request = require('request');
    const url = "https://www.fh-joanneum.at/";
    let counter = 1;

    beforeAll((done)=>{
       data = {}
        request.get(url,(err,response,body)=>{
           data.body=body;
           done();
       });
    });

    beforeEach(()=>{console.log(`Test ${counter} part04 started`);})
    afterEach(()=>{console.log(`Test ${counter} part04 finished`);counter++;})


    it("Includes word \"Bibliothek\"?",()=>{
        expect(data.body).toContain("bibliothek");
    });

});
