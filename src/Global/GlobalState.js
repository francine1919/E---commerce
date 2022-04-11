import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};

export default GlobalState;
