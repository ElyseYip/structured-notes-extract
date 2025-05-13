import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import WatchList from "./pages/watchList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/watchlist"
          element={
            <PageLayout>
              <WatchList />
            </PageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
