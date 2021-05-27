import React from 'react';
import Button from '@atlaskit/button';
import SectionMessage from '@atlaskit/section-message';



class Start extends React.Component {
  state = {
    success: ''
  }

  handleStart = () => {
    const random = Math.random() < 0.5;
    console.log('here')
    this.setState({
      success: random
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleStart} shouldFitContainer appearance="primary">
          Click to start
        </Button>
        {
          this.state.success
            ? <SectionMessage appearance="success">
              <p>Succeeded.</p>
            </SectionMessage>
            : <SectionMessage title="Cannot connect to the database" appearance="warning">
              <p>Failed.</p>
            </SectionMessage>
        }
      </div >

    )
  }

}

export default Start;

