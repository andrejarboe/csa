import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                    {/* <section className="sticky">
                        <Navbar />
                    </section> */}
                    <section>
                        <h1>info</h1>
                    </section>
                    </div>
                    <div className="main">
                        {/* <Main /> */}
                        <section className="sticky">
                        <Navbar />
                    </section>                        
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
