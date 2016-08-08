import * as React from "react";

class App extends React.Component<{}, {}> {

    render() {
        return (
            <span>{ this.props.children }</span>
        );
    }
}

export default App;
