import './Styles.css';
import Header from './components/Header';
import DisplayResults from './components/DisplayResults';
import Footer from './components/Footer';

function App() {

    return (
        <div className="App">
            <a href="#mainContent" class="skipLink">Skip to main content</a>
            <Header />
            <main class="wrapper" id="mainContent">
                <DisplayResults />
            </main>
            <Footer />
        </div>
    );
}

export default App;