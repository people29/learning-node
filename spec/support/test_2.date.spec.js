const moment = require("moment");

xdescribe("test date", ()=> {

    describe("date 1", ()=> {
        beforeEach(() => {
            jasmine.clock().install();
            //console.log("before >> ", moment());
            jasmine.clock().mockDate(moment("20170222 15:46", "YYYYMMDD HH:mm").toDate());
            //console.log("after >> ", moment());
        });

        it('should fail', function() {
            expect(true).toBe(true);
        });
    });

    describe("date 2", ()=> {
        afterEach(function() {
            jasmine.clock().install();
            //throw 1;
        });

        it('shouldxx', function() {
            //console.log(" 22 >> ", moment());
            jasmine.clock().uninstall();
        });
    })

    describe("date 3", ()=> {
        it('shouldxx', function() {
            // console.log(" 33 >> ", moment());
        });
    });



});