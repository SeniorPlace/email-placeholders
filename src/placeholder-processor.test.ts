import { expect, test } from "vitest";
import { processPlaceholders } from "./placeholder-processor";

test("without tokens", () => {
  expect(processPlaceholders("hello, world!", {})).toEqual("hello, world!");
});

test("with a token", () => {
  expect(processPlaceholders("hello, {{name}}!", { name: "WORLD" })).toEqual(
    "hello, WORLD!"
  );
});

test("with 2 tokens", () => {
  expect(
    processPlaceholders("hello, {{name}}! My name is {{myName}}", {
      name: "WORLD",
      myName: "VITEST",
    })
  ).toEqual("hello, WORLD! My name is VITEST");
});

test("with 2 tokens with the same value", () => {
  expect(
    processPlaceholders("hello, {{name}}! My name is {{name}}", {
      name: "WORLD",
    })
  ).toEqual("hello, WORLD! My name is WORLD");
});

test("with a token that is not in the content", () => {
  expect(processPlaceholders("hello, world!", { name: "WORLD" })).toEqual(
    "hello, world!"
  );
});

test("with a space in the token", () => {
  expect(processPlaceholders("hello, {{ name }}!", { name: "WORLD" })).toEqual(
    "hello, WORLD!"
  );
});

test("with a token that is not in the placeholders", () => {
  expect(processPlaceholders("hello, {{name}}!", {})).toEqual("hello, !");
});
