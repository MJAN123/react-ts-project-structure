import { List } from "immutable";
import createSelector from "../../utils/reselect";

export const getHelloWorld = (state: any) => {
  const { helloWorld } = state;
  return helloWorld || List();
};

export const getMessage = createSelector(
  getHelloWorld,
  data => {
    return data.getIn(["helloWorld", "message"]);
  }
);
