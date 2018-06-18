const moment = require("moment");

describe("test date", ()=> {

    describe("date", ()=> {
        beforeAll(()=> {
            jasmine.clock().install();
        });

        it("1", ()=> {
            jasmine.clock().mockDate(moment("20190222 15:46", "YYYYMMDD HH:mm").toDate());
            jasmine.clock().uninstall();
            jasmine.clock().uninstall();
        });
    });


});