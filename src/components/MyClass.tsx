import React from 'react';
import '../App.css';

export interface MyClassProps {
    name?: string;
    isMarried: boolean;
}


class MyClass extends React.Component<MyClassProps> {

    public static defaultProps: Partial<MyClassProps> = {
        name: 'tomise',
    }

    state = {
        age: 21
    };

    render() {
        return (
          <div className="App">
            <h1>{this.props.name}</h1>
            <h3>{this.props.isMarried}</h3>
          </div>
        );
    }
}

export default MyClass;
