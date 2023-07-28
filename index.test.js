import { getPropertiesExcept } from ".";

describe("getPropertiesExcept", () => {
  it("should exclude a single property", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    const result = getPropertiesExcept(obj, "age");
    expect(result).toEqual({ name: "John", city: "New York" });
  });

  it("should exclude multiple properties", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    const result = getPropertiesExcept(obj, "age", "city");
    expect(result).toEqual({ name: "John" });
  });

  it("should handle non-existing properties", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    const result = getPropertiesExcept(obj, "gender");
    expect(result).toEqual({ name: "John", age: 30, city: "New York" });
  });

  it("should exclude all properties when provided with all properties as arguments", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    const result = getPropertiesExcept(obj, ...Object.keys(obj));
    expect(result).toEqual({});
  });

  it("should return an empty object when called with an empty object and excluding a property", () => {
    const obj = {};
    const result = getPropertiesExcept(obj, "name");
    expect(result).toEqual({});
  });

  it("should return an empty object when called with an empty object and no properties to exclude (empty exclusion list)", () => {
    const obj = {};
    const result = getPropertiesExcept(obj);
    expect(result).toEqual({});
  });
});
