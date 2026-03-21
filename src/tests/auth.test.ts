import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import type { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test(" ", () => {
    expect(getAPIKey).toBeDefined();
  });

  test(" ", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey 12345",
    };
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("12345");
  });
  ////

  test("", () => {
    const headers: IncomingHttpHeaders = {};
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBeNull();
  });
});
