import axios from "axios";
import { atom, selector } from "recoil";

const dragonsListState = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios(
      "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
    );
    if (response.status !== 200) {
      throw new Error("Couldn't get your dragons. Sorry please try again.");
    }
    return response.data;
  },
});

const loginStatus = atom({
  key: "loginStatus",
  default: false,
});

export { dragonsListState, loginStatus };
