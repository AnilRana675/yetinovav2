import { describe, expect, it, vi } from "vitest";
import { hexToRgb } from "./utils";

describe("hexToRgb", () => {
  it("converts 6-character hex to RGB normalized values", () => {
    expect(hexToRgb("#ffffff")).toEqual([1, 1, 1]);
    expect(hexToRgb("#000000")).toEqual([0, 0, 0]);
    expect(hexToRgb("#ff0000")).toEqual([1, 0, 0]);
    expect(hexToRgb("#00ff00")).toEqual([0, 1, 0]);
    expect(hexToRgb("#0000ff")).toEqual([0, 0, 1]);
  });

  it("converts 3-character hex to RGB normalized values", () => {
    expect(hexToRgb("#fff")).toEqual([1, 1, 1]);
    expect(hexToRgb("#f00")).toEqual([1, 0, 0]);
    expect(hexToRgb("#0f0")).toEqual([0, 1, 0]);
    expect(hexToRgb("#00f")).toEqual([0, 0, 1]);
  });

  it("handles 8-character hex (ignores alpha)", () => {
    expect(hexToRgb("#ffffffff")).toEqual([1, 1, 1]);
    expect(hexToRgb("#ff000080")).toEqual([1, 0, 0]);
  });

  it("returns NaN for invalid hex", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = hexToRgb("#gggggg");
    expect(result[0]).toBeNaN();
    expect(hexToRgb("#12")).toEqual([0, 0, 0]);
    expect(hexToRgb("invalid")).toEqual([0, 0, 0]);
    consoleSpy.mockRestore();
  });

  it("handles hex without # prefix", () => {
    expect(hexToRgb("ffffff")).toEqual([1, 1, 1]);
    expect(hexToRgb("f00")).toEqual([1, 0, 0]);
  });
});
