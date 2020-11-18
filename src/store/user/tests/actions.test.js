import axios from "axios";
import { loginSuccess, LOGIN_SUCCESS, signUp, login } from "../actions";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../../appState/actions";

jest.mock("axios");
const userWithToken = "token";

describe("user actions", () => {
  describe("#loginSuccess", () => {
    describe("if given an userWithToken", () => {
      test("should return an action object", () => {
        const expected = {
          type: LOGIN_SUCCESS,
          payload: userWithToken,
        };

        expect(loginSuccess(userWithToken)).toEqual(expected);
      });
    });
  });
  describe("#login", () => {
    describe("if called with email and password", () => {
      test("should return a token and dispatch loginSucces", async () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
        const response = { data: userWithToken };

        axios.post.mockImplementationOnce(() => Promise.resolve(response));

        const thunk = login();
        await thunk(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(loginSuccess(userWithToken));
      });
    });
  });
  describe("#signUp", () => {
    describe("when this function is called", () => {
      test("it should create a user and dispatch an loginSucces action", async () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
        const response = { data: userWithToken };
        const userLogin = { email: "adsfa", password: "asdfasdf" };

        axios.post.mockImplementationOnce(() => Promise.resolve(response));

        const thunk = signUp(userLogin);
        await thunk(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(loginSuccess(response.data));
        expect(dispatch).toHaveBeenCalledWith(appLoading());
        expect(dispatch).toHaveBeenCalledWith(loginSuccess(response.data));
        expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
      });
    });
  });
});
