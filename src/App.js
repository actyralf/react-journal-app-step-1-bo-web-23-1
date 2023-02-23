import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EntryForm from "./components/EntryForm";
import Entry from "./components/Entry";
import Main from "./components/Main";
import Entries from "./components/Entries";

function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm />
        <Entries>
          <Entry />
          <Entry />
          <Entry />
        </Entries>
      </Main>
      <Footer />
    </>
  );
}

export default App;
