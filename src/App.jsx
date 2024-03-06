// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
function App() {
  const menu = ["Home", "Details", "Boh", "Ciao"];
  const users = [
    {
      ID: 1,
      Name: "Federico",
      Surname: "Manna",
      Age: 23
    },
    {
      ID: 2,
      Name: "Andrea",
      Surname: "Montefiori",
      Age: 42
    },
    {
      ID: 3,
      Name: "Alessandro",
      Surname: "Abbro",
      Age: 25
    }
  ]

  return (
    <>
      <Navbar menu={menu} />
      <Main utenti={users} />
      <Footer />

    </>
  );
}

export default App;
