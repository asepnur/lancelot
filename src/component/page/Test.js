import React from 'react';

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
                <Test2/>
            </div>
        );
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <button onClick={Test2}>
                Activate Lasers
            </button>
        )
    }
}

export default Test;