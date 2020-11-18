import { FETCH_SPACES_SUCCESS, fetchSpacesSuccess } from "../actions";

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of homepages", () => {
    const homepages = [{}, {}];

    test("should return an action object", () => {
      const expected = {
        type: FETCH_SPACES_SUCCESS,
        payload: homepages,
      };

      expect(fetchSpacesSuccess(homepages)).toEqual(expected);
    });
    test("action.payload should have the same length as the argument given", () => {
      const result = fetchSpacesSuccess(homepages);
      expect(result.payload).toHaveLength(2);
    });
  });

  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      const spaces = null;
      const result = fetchSpacesSuccess(spaces);
      expect(result.payload).toBeNull();
    });
  });
});
