// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('should have key called organization with the value of nonprofit', function() {
    expect(launchcode.organization).toBe('nonprofit')
  });
  test('should have key called executiveDirector with the value of Jeff', function () {
    expect(launchcode.executiveDirector).toBe('Jeff')
  });
  test('should have key called percentageCoolEmployees with value of 100', function () {
    expect(launchcode.percentageCoolEmployees === 100).toBe(true)
  });
  test('should have key called programsOffered with stores an array "Web Development", "Data Analysis", "Liftoff"', function() {
    expect(launchcode.programsOffered.length).toBe(3);
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
  });
  test('should have function called launchOutput that returns "Launch!" when a number is ONLY divisible by 2', function () {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  })
  test('should have function called launchOutput that returns "Code!" when a number is ONLY divisible by 3', function () {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  })
  test('should have function called launchOutput that returns "Rocks!" when a number is ONLY divisible by 5', function () {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  })
  test('should have function called launchOutput that returns "LaunchCode!" when a number is divisible by 2 and 3', function () {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  })  
  test('should have function called launchOutput that returns "Code Rocks!" when a number is divisible by 3 and 5', function () {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  })  
  test('should have function called launchOutput that returns "Launch Rocks! (CRASH!!!!!)" when a number is divisible by 2 and 5', function () {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!!)');
  })  
  test('should have function called launchOutput that returns "LaunchCode Rocks!" when a number is divisible by 2, 3, and 5', function () {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  }) 
  test("should have function called launchOutput that returns 'Rutabagas! That doesn't work.' when a number is NOT divisible by 2, 3, or 5", function () {
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
  }) 
  // Write your unit tests here!
  
});