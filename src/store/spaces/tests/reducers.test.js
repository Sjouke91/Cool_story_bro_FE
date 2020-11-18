import axios from "axios";
import {
  FETCH_SPACES_SUCCESS,
  fetchSpacesSuccess,
  fetchSpaces,
} from "../actions";

// module mocks are declared on a global scope, function mocks on the appropiate describe/test scope
jest.mock("axios");

describe("#fetchSpaces", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_SPACES_SUCCESS", async () => {
      jest.mock("axios");
      const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
      const dispatch = jest.fn();
      const response = {
        data: { spaces: { rows: [{ name: "matias" }] } },
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await fetchSpaces()(dispatch, getState); // call it twice because it's a thunk, we simulate redux

      expect(getState).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
        fetchSpacesSuccess(response.data.spaces.rows)
      );
    });
  });
});
