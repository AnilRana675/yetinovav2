import { describe, expect, it } from "vitest";
import { checkRateLimit, getRateLimitHeaders, getRetryAfterSeconds } from "./rate-limit";

describe("checkRateLimit", () => {
  it("allows first request for a new IP", () => {
    const result = checkRateLimit("192.168.1.1");
    expect(result.success).toBe(true);
    expect(result.remaining).toBeLessThanOrEqual(5);
    expect(result.limit).toBe(5);
  });

  it("returns success status correctly", () => {
    const result = checkRateLimit("192.168.1.1");
    expect(typeof result.success).toBe("boolean");
    expect(typeof result.limit).toBe("number");
    expect(typeof result.remaining).toBe("number");
    expect(typeof result.resetAt).toBe("number");
  });

  it("has valid reset time in future", () => {
    const now = Date.now();
    const result = checkRateLimit("192.168.1.1");
    expect(result.resetAt).toBeGreaterThan(now);
  });
});

describe("getRateLimitHeaders", () => {
  it("returns correct headers", () => {
    const result = {
      success: true,
      limit: 5,
      remaining: 4,
      resetAt: 1700000000000,
    };

    const headers = getRateLimitHeaders(result);
    expect(headers["X-RateLimit-Limit"]).toBe("5");
    expect(headers["X-RateLimit-Remaining"]).toBe("4");
    expect(headers["X-RateLimit-Reset"]).toBe("1700000000");
  });

  it("handles zero remaining", () => {
    const result = {
      success: false,
      limit: 5,
      remaining: 0,
      resetAt: 1700000000000,
    };

    const headers = getRateLimitHeaders(result);
    expect(headers["X-RateLimit-Remaining"]).toBe("0");
  });
});

describe("getRetryAfterSeconds", () => {
  it("returns positive number for future reset time", () => {
    const futureTime = Date.now() + 60000;
    const result = getRetryAfterSeconds(futureTime);
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThanOrEqual(60);
  });

  it("returns 0 or negative for past reset time", () => {
    const pastTime = Date.now() - 1000;
    const result = getRetryAfterSeconds(pastTime);
    expect(result).toBeLessThanOrEqual(0);
  });
});
