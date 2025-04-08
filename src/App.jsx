import "./App.css";
import AppRouter from "./AppRouter";
import { MusicProvider } from "./MusicContext";

function App() {
  return (
    <MusicProvider>
      <AppRouter />
    </MusicProvider>
  );
}

export default App;
