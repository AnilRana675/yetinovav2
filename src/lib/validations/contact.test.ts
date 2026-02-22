import { describe, expect, it } from "vitest";
import {
  contactFormSchema,
  formatValidationErrors,
  inquiryTypeLabels,
  inquiryTypes,
} from "./contact";

describe("contactFormSchema", () => {
  it("validates a correct contact form", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      inquiryType: "funding",
      message: "Hello, I would like to apply for funding.",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejects name too short", () => {
    const invalidData = {
      name: "J",
      email: "john@example.com",
      inquiryType: "funding",
      message: "Hello, I would like to apply for funding.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("name");
    }
  });

  it("rejects name too long", () => {
    const invalidData = {
      name: "J".repeat(101),
      email: "john@example.com",
      inquiryType: "funding",
      message: "Hello, I would like to apply for funding.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const invalidData = {
      name: "John Doe",
      email: "not-an-email",
      inquiryType: "funding",
      message: "Hello, I would like to apply for funding.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects invalid inquiry type", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      inquiryType: "invalid",
      message: "Hello, I would like to apply for funding.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects message too short", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      inquiryType: "funding",
      message: "Short",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("rejects message too long", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      inquiryType: "funding",
      message: "A".repeat(2001),
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("blocks bot submissions via hidden websiteUrl field", () => {
    const botData = {
      name: "John Doe",
      email: "john@example.com",
      inquiryType: "funding",
      message: "Hello, I would like to apply for funding.",
      websiteUrl: "http://spam.com",
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });

  it("validates all inquiry types", () => {
    for (const type of inquiryTypes) {
      const data = {
        name: "John Doe",
        email: "john@example.com",
        inquiryType: type,
        message: "Hello, I would like to apply for funding.",
      };

      const result = contactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
    }
  });

  it("validates inquiry type labels", () => {
    expect(inquiryTypeLabels.funding).toBe("Apply for Funding");
    expect(inquiryTypeLabels.partnership).toBe("Strategic Partnership");
    expect(inquiryTypeLabels.government).toBe("Government & NGO");
    expect(inquiryTypeLabels.general).toBe("General");
  });
});

describe("formatValidationErrors", () => {
  it("formats field errors correctly", () => {
    const fieldErrors = {
      name: ["Name must be at least 2 characters"],
      email: ["Please enter a valid email address"],
    };

    const result = formatValidationErrors(fieldErrors);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      field: "name",
      message: "Name must be at least 2 characters",
      code: "invalid_value",
    });
    expect(result[1]).toEqual({
      field: "email",
      message: "Please enter a valid email address",
      code: "invalid_value",
    });
  });

  it("handles empty field errors", () => {
    const fieldErrors = {
      name: [],
      email: [],
    };

    const result = formatValidationErrors(fieldErrors);
    expect(result).toHaveLength(0);
  });

  it("handles undefined field errors", () => {
    const fieldErrors = {
      name: undefined,
    };

    const result = formatValidationErrors(fieldErrors);
    expect(result).toHaveLength(0);
  });

  it("only takes first error message per field", () => {
    const fieldErrors = {
      name: ["First error", "Second error"],
    };

    const result = formatValidationErrors(fieldErrors);
    expect(result).toHaveLength(1);
    expect(result[0].message).toBe("First error");
  });
});
