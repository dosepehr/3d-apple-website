import React from 'react';
import Nav from './components/Nav';
import Jumborton from './components/Jumbotron';
import SoundSection from './components/SoundSection';

const App = () => {
    return (
        <>
            <div className='App'>
                <Nav />
                <Jumborton />
                <SoundSection />
            </div>
        </>
    );
};

export default App;

