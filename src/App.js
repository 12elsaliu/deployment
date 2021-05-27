import './App.css';
import React from 'react';
import DisplayTable from './components/DisplayTable/DisplayTable'
import FindId from './components/FindId/FindId';
import Navigation from './components/navigation/Navigation';
import Start from './components/Start/Start'

class App extends React.Component {
  state = {
    router: 'deployment'
  }

  handleClick = (router) => {
    this.setState({
      router
    })
  }
  render() {
    return (
      <>
        <Navigation handleClick={this.handleClick} />
        {
          this.state.router === 'deployment'
            ? <div>
              <FindId />
              <DisplayTable />
            </div>
            : <Start />
        }
      </>
    )
  }
}

export default App;
