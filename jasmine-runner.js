process.env.NODE_ENV = "test";

var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var jrunner = new Jasmine();

jrunner.loadConfigFile("spec/jasmine.json");

if (process.argv.indexOf("spec") > -1) {
    jrunner.env.clearReporters();
    jrunner.addReporter(new SpecReporter({
        displaySpecDuration: true
    }));
}

jrunner.execute();
