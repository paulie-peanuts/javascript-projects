const RPS = require('../RPS.js');

describe("RPS", function(){
    test("returns TIE!", function() {
        let output = RPS('rock', 'rock');
        expect(output).toEqual("TIE!");
    });
    test("returns 'Player 2 wins!' when P1 rock P2 paper", function() {
        let output = RPS('rock','paper');
        expect(output).toEqual("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' when P1 paper P2 scissors", function() {
        let output = RPS('paper','scissors');
        expect(output).toEqual("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' when P1 scissors P2 rock", function() {
        let output = RPS('scissors','rock');
        expect(output).toEqual("Player 2 wins!");
    });
    test("returns 'Player 1 wins!' when P1 rock P2 scissors", function() {
        let output = RPS('rock','scissors');
        expect(output).toEqual("Player 1 wins!");
    });
    test("returns 'Try again!' when P1 misthrows", function() {
        let output = RPS('rock ','scissors');
        expect(output).toEqual("Try again!");
    });
});