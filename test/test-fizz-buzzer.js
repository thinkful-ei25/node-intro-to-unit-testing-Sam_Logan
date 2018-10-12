'use strict';
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  
  it('should return fizz-buzz for numbers divisible by 5 and 3', function(){
    const testCases = [15,30,45,975];
    testCases.forEach(function(num){
      expect(fizzBuzzer(num)).to.equal('fizz-buzz');
    });
  });

  it('should return fizz for numbers divisible 3 and not 5', function(){
    const testCases = [3,9,42,333];
    testCases.forEach(function(num){
      expect(fizzBuzzer(num)).to.equal('fizz');
    });
  });

  it('should return buzz for numbers divisible 5 and not 3', function(){
    const testCases = [5,25,55,550];
    testCases.forEach(function(num){
      expect(fizzBuzzer(num)).to.equal('buzz');
    });
  });

  it('should return number for numbers not divisible by 3 or 5', function(){
    [1,2,43,13].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should produce error if input is not a number', function(){
    const badInputs = [true, false, 'banana', function(){}, [1,2,87]];
    badInputs.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });


});
