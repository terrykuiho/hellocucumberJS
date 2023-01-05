const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    if (today === "Friday"){
        return 'TGIF';
    }else{
        return 'Nope';
    }
};

 Given('today is Sunday', function () {
   // Write code here that turns the phrase above into concrete actions
   //return 'pending';
   this.today = 'Sunday';
 });

 Given('today is Friday', function () {
    this.today = 'Friday';
    });

 When('I ask whether it\'s Friday yet', function () {
   // Write code here that turns the phrase above into concrete actions
   //return 'pending';
   this.actualAnswer = isItFriday(this.today);
 });

 Then('I should be told {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.strictEqual(this.actualAnswer, expectedAnswer);
 });

