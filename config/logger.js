"use strict";

var winston = require('winston');
var moment = require('moment');
var strftime = require('strftime');
const bunyan = require('bunyan'), safeCycles = bunyan.safeCycles;
var fs = require('fs');

var env = "development";//process.env.NODE_ENV;
var strftimePDT = strftime.timezone('+0700');
var _level = (env === 'test' || env === 'development' || env === 'qa') ? 'debug' : 'info';

var banyanLogger = bunyan.createLogger({
    name: "app-log",
    level: _level,
    streams: [
        {
            type: 'raw',
            stream: new SpecificLevelStream(
                [_level],
                new bunyan.RotatingFileStream({
                    path: "../logs/application-log." + strftime('%Y-%m-%d', new Date())+".log",
                    period: '1d',
                    count: 360
                })
            )
        }
    ]
});

 /**
 * A raw Bunyan Logger stream object. It takes raw log records and writes
 * them to stdout with an added "yo": "yo" field.
 */
function MyRawStream() {}
MyRawStream.prototype.write = function (rec) {
    if (typeof (rec) !== 'object') {
        console.error('error: raw stream got a non-object record: %j', rec)
    } else {
        var strftimePDT = strftime.timezone('+0700')
        //rec.m = 'm&m';
        rec.time = strftimePDT('%F %T', new Date());
        process.stdout.write(JSON.stringify(rec) + '\n');

    }
}

/**
 * Use case #1: cli tool that outputs errors on stderr and everything else on
 * stdout.
 *
 * First make a raw bunyan stream (i.e. an object with a `.write(rec)`).
 */
function SpecificLevelStream(levels, stream) {
    var self = this;
    this.levels = {};
    levels.forEach(function (lvl) {
        self.levels[bunyan.resolveLevel(lvl)] = false;
    });
    this.stream = stream;
}
SpecificLevelStream.prototype.write = function (rec) {
    //if (this.levels[rec.level] !== undefined) {
    if (typeof (rec) !== 'object') {

    }else{
        rec.time = strftimePDT('%F %T', new Date());
        var str = JSON.stringify(rec, safeCycles()) + '\n';
        this.stream.write(str);
    }
}


module.exports = banyanLogger;