import GlobalState from "./Global/GlobalState";
import Routes from "./Router/Routes";

function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
