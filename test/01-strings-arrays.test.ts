import {
  isUnique,
  isUniqueQuadratic,
  isPermutation,
  urlify,
  containsPermutationPalindromes,
  oneAway,
} from "../src/laakman-mcdowell/01-strings-arrays";

describe("1.1 isUnique", () => {
  it("LINEAR: can handle unique values", () => {
    expect(isUnique("bad")).toBeTruthy();
    expect(isUnique("good")).toBeFalsy();
  });

  it("LINEAR: can handle complex strings", () => {
    expect(isUnique("1414")).toBeFalsy();
    expect(isUnique("Me and Mrs Jones")).toBeFalsy();
    expect(isUnique("abcd10jk")).toBeTruthy();
    expect(isUnique("hutg9mnd!nk9")).toBeFalsy();
  });

  it("QUADRATIC: can handle unique values", () => {
    expect(isUniqueQuadratic("bad")).toBeTruthy();
    expect(isUniqueQuadratic("good")).toBeFalsy();
  });

  it("QUADRATIC: can handle complex strings", () => {
    expect(isUniqueQuadratic("1414")).toBeFalsy();
    expect(isUniqueQuadratic("Me and Mrs Jones")).toBeFalsy();
    expect(isUniqueQuadratic("abcd10jk")).toBeTruthy();
    expect(isUniqueQuadratic("hutg9mnd!nk9")).toBeFalsy();
  });
});

describe("1.2 isPermutation", () => {
  it("handles basic cases", () => {
    expect(isPermutation("rats", "star")).toBeTruthy();
    expect(isPermutation("bear", "bare")).toBeTruthy();
    expect(isPermutation("beer", "burst")).toBeFalsy();
    expect(isPermutation("cat", "tax")).toBeFalsy();
  });
});

describe("1.3 Urlify", () => {
  it("handles basic cases", () => {
    expect(urlify("Mr John Smith   ")).toBe("Mr%20John%20Smith");
  });
});

describe("1.4 Palindrome Permuations", () => {
  it("runs", () => {
    expect(containsPermutationPalindromes("anna")).toBeTruthy();
    expect(containsPermutationPalindromes("adrar")).toBeTruthy();
    expect(containsPermutationPalindromes("iivcc")).toBeTruthy();
    expect(containsPermutationPalindromes("blue")).toBeFalsy();
    expect(containsPermutationPalindromes("blueblu")).toBeTruthy();
    expect(containsPermutationPalindromes("red")).toBeFalsy();
    expect(containsPermutationPalindromes("yellow")).toBeFalsy();
    expect(containsPermutationPalindromes("tact coa")).toBeTruthy();
  });
});

describe("1.5 One Away", () => {
  expect(oneAway("pale", "ple")).toBeTruthy();
  expect(oneAway("pales", "pale")).toBeTruthy();
  // expect(oneAway(""))
});
