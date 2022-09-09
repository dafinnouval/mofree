import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";

import "./style/landingPage.css";
import SearchBox from "./components/SearchBox";

function App() {
    // const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <div className="myBG">
                <NavigationBar />
                <Intro />
            </div>

            <div className="trending">
                {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
                <Trending />
            </div>

            {/* <div className="superhero">
                <SuperHero />
            </div> */}
        </div>
    );
}

export default App;
