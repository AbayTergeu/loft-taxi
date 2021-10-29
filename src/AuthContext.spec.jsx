import React from "react"
import { AuthProvider, AuthContext } from "./AuthContext"
import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"

describe("AuthContext", () => {
  describe("check logIn", () => {
    test("isLoggedIn true", () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn("abter@gmail.com", "abter");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("check logOut", () => {
    test("isLoggedIn false", () => {
      let isLoggedIn;
      let logOut;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              logOut = value.logOut;
              logIn = value.logIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        logIn("abter@gmail.com", "abter");
        logOut();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});
