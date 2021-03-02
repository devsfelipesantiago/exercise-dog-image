import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogObj: 'Dogs',
    };
  }


  componentDidMount() {
    this.fecthApi()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogObj.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  fecthApi = async () => {
    const req = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await req.json();
    this.setState({ dogObj: data });
  };

  render() {
    if (this.state.dogObj === "") return "loading...";
    return (
      <div className="App">
        <h1>Foto</h1>
        <div>
          <button onClick={this.fecthApi}>Novo cachorro!</button>
          <div>
            <img src={ this.state.dogObj.message } alt='dogs'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
