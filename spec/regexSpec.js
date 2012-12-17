describe("your regexes", function(){

  // CHALLENGE: enforce irritating username rules
  // - must start with a letter.
  // - must be between 4 and 20 characters long.
  // - can only contain letters, spaces, underscores and hyphens.
  it("should filter usernames", function(){

    var regex = /fixme/;

    var tests = [
      ["shawndrost", true],
      ["007shawndrost", false],
      ["_shawndrost", false],
      ["bro", false],
      ["bros", true],
      ["all killer", true],
      ["all-killer", true],
      ["all_killer", true],
      ["no%filler", false],
      ["a_____--______------", true],
      ["a123", false],
      ["abcdefghijklmnopqrstuvwxyz", false],
      ["abcdefghijklmnopqrst", true]
    ];

    tests.forEach(function(testData){
      var string = testData[0], shouldMatch = testData[1];
      if(shouldMatch){
        expect(string).toMatch(regex);
      } else {
        expect(string).not.toMatch(regex);
      }
    })
  })

  // CHALLENGE: extract text contents of a string with an html tag in it
  // - use lazy matchers.
  // - use match groups to get your result.
  // - don't use non-regex, non-match group techniques here.
  it("should filter usernames", function(){

    var extractText = function(str){
      var matches = /fixme/.match(str);
      return /* something to do with matches?? */;
    };

    var tests = [
      ["<p>shawndrost</p>", "shawndrost"],
      ["<p style='asdf'>talkin bout shawndrost</p>", "talkin bout shawndrost"],
      ["shawndrost is <font style='color:red'>rad</font> yo", "shawndrost is rad yo"]
    ];

    tests.forEach(function(testData){
      expect(extractText(testData[0])).toEqual(testData[1]);
    })
  })

  // - match an ip address
  // - match a floating point number.  (trickier than it seems, due to dependencies.  see http://www.regular-expressions.info/floatingpoint.html)
  // - given a string and a few words, test if any of the words occur near each other (within 5 words) within the string
  // - remove the comments from a piece of source code

});
