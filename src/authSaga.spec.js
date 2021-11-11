import { recordSaga } from "./recordSaga";
import { authenticateSaga } from "./authSaga";
import { authenticate } from "./actions";

jest.mock("./api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    test("authenticates through api", async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate("testlogin", "testpassword")
      );

      expect(dispatched).toEqual([
        {
          type: "LOG_IN"
        }
      ]);
    });
  });
});
