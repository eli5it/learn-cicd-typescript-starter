import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";






describe("getApiKey", () => {
  test("Returns null when no authorization header is present", () => {
    const headers: IncomingHttpHeaders = {}
    const res = getAPIKey(headers)
    expect(res).toBe(null)
  });

  test("returns null when no apiKey is provided in auth headers", () => {
    const headers: IncomingHttpHeaders = {
        "authorization": "bearer 42"
    }
    const res = getAPIKey(headers)
    expect(res).toBe(null)
  });
  test("returns api key if provided", () => {
    const headers: IncomingHttpHeaders = {
        authorization: "ApiKey key"
    }
    const res = getAPIKey(headers)
    expect(res).toBe("key")
  })
});

