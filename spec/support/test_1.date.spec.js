const moment = require("moment");

fdescribe("test date", ()=> {

    describe("date", ()=> {
        beforeAll(()=> {
            jasmine.clock().install();
        });

        it("1", ()=> {
            jasmine.clock().mockDate(moment("20190222 15:46", "YYYYMMDD HH:mm").toDate());

            console.log("xxx", moment());
            jasmine.clock().uninstall();
            jasmine.clock().uninstall();
        });
    });


});