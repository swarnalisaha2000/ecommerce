import './App.css';
import { Header } from './common/header/Header/Header';
import { Head } from './common/header/Head/Head';
import { Navbar } from './common/header/Navbar/Navbar';
import { Search } from './common/header/Seach/Seach';

function App() {
  return (
    <div className="App">
      <Header />
      <Head />
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
