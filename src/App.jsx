import SectionContainer from "./components/SectionContainer";
import pages from "./data/pages";
import "./App.css";

function App() {

    return (
        <>
            <SectionContainer
                pages={pages}
            />
        </>
    );

}

export default App;