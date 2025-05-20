const { reverseString, isPalindrome, truncateString, countCharacters } = require('../src/stringUtils.js');

test('reverse string ciao',()=>{
    expect(reverseString("ciao")).toBe("oaic");
});

test('reverse string 1234ab',()=>{
    expect(reverseString("1234ab")).toBe("ba4321");
});

test('reverse string ""',()=>{
    expect(reverseString("")).toBe("");
});

test('isPalindrome mom',()=>{
    expect(isPalindrome("mom")).toBe(true);
});

test('isPalindrome ()()',()=>{
    expect(isPalindrome("()()")).toBe(false);
});

test('isPalindrome ())(',()=>{
    expect(isPalindrome("())(")).toBe(true);
});

test('truncate string concatenation 10',()=>{
    expect(truncateString("concatenation",10)).toBe("concatenat...");
});

test('truncate string ciao 4',()=>{
    expect(truncateString("ciao",4)).toBe("ciao");
});

test('truncate string emptystring 0',()=>{
    expect(truncateString("emptystring",0)).toBe("...");
});

test('count characters of string pruple',()=>{
    expect(countCharacters("purple")).toBe("{p: 2, u: 1, r: 1, l: 1, e: 1}");
});

test('count characters of string concatena',()=>{
    expect(countCharacters("concatena")).toBe("{c: 2, o: 1, n: 2, a: 2, t: 1, e: 1}");
});