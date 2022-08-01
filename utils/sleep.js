"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMsgAndSleep = exports.sleep = void 0;
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
exports.sleep = sleep;
function showMsgAndSleep(message, milliseconds) {
    console.log(message);
    sleep(milliseconds);
}
exports.showMsgAndSleep = showMsgAndSleep;
