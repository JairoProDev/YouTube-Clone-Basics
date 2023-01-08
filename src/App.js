import Feed from "./components/feed/Feed";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import classes from './app.module.css'

function App() {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>
        <Menu />
        <Feed />
      </main>
    </div>
  );
}

export default App;
