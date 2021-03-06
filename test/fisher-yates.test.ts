import { ModernShuffle, IShuffledReport } from "../src";

const shuffle = new ModernShuffle(ModernShuffle.mockData);
const report: IShuffledReport = shuffle.generateReport();

describe("Shuffle", () => {
  it("randomized items array and initial array lengths equal", () => {
    expect(ModernShuffle.mockData.length).toEqual(shuffle.result.length);
  });

  it("passes check and exceeds thresholds", () => {
    expect(shuffle.resultDetails.passes).toBeTruthy();

    expect(shuffle.checkThresholds()).toBeGreaterThan(1);
  });

  it("contains different items", () => {
    report.indexes.forEach(i => {
      expect(shuffle.result[i]).not.toEqual(ModernShuffle.mockData[i]);
    });
  });
});
