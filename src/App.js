

import { Provider } from "react-redux";
import Header from "./components/header/Header";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
