import React, { useState, useEffect } from 'react';
import MyButton from './MyButton';
import DisplayComponent from './DisplayComponent';
import eventEmitter from '../events/eventEmitter';

const MainComponent = () => {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const handleShowComponent = () => {
            setShowComponent(true);
        };

        eventEmitter.on('showComponent', handleShowComponent);

        return () => {
            eventEmitter.events['showComponent'] = [];
        };
    }, []);

    const handleButtonClick = () => {
        eventEmitter.emit('showComponent');
    };

    return (
        <div>
            <MyButton onClick={handleButtonClick} label="Show Component" />
            {showComponent && <DisplayComponent />}
        </div>
    );
};

export default MainComponent;
