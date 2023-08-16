import React from 'react';
import Nav from './components/Nav';
import Jumborton from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';

const App = () => {
    return (
        <div className='App'>
            <Nav />
            <Jumborton />
            <SoundSection />
            <DisplaySection />
        </div>
    );
};

export default App;

