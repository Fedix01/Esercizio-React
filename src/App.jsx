// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Main2 from './components/Main2/Main2';
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
      <Main2 />
      <Footer />
    </>
  );
}

export default App;
