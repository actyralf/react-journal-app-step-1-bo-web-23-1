import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EntryForm from "./components/EntryForm";
import Entry from "./components/Entry";
import Main from "./components/Main";
import EntriesSection from "./components/EntriesSection";
import TabBar from "./components/TabBar";
import EntryList from "./components/EntryList";

function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm />
        <EntriesSection>
          <TabBar />
          <EntryList>
            <Entry
              title="That's life in the city"
              date={Date.parse("2028-02-27")}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaque rerum est eaque et quasi amet quod adipisci perferendis, facere culpa architecto commodi quo quae reprehenderit provident recusandae dolor reiciendis."
              isFavorite
            />
            <Entry
              title="That's life in the city"
              date={Date.parse("2028-02-26")}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaque rerum est eaque et quasi amet quod adipisci perferendis, facere culpa architecto commodi quo quae reprehenderit provident recusandae dolor reiciendis."
            />
            <Entry
              title="That's life in the city"
              date={Date.parse("2028-02-25")}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum itaque rerum est eaque et quasi amet quod adipisci perferendis, facere culpa architecto commodi quo quae reprehenderit provident recusandae dolor reiciendis."
            />
          </EntryList>
        </EntriesSection>
      </Main>
      <Footer text="Journal App - 2028" />
    </>
  );
}

export default App;
