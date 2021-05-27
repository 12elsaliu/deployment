import React, { Component } from 'react';

import Button from '@atlaskit/button/standard-button';

import InlineDialog from '@atlaskit/inline-dialog';

const styles = {
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  zIndex: 1
};

export default class Deployment extends Component {

  state = {
    dialogOpen: false,
  };

  toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen });

  closeDialog = () => this.setState({ dialogOpen: false });

  content =
    <div>
      <p>Created by Account ID:</p>
      <p>{this.props.creation}</p>
    </div>

  render() {
    // document.body.addEventListener('click', this.closeDialog)

    return (
      <InlineDialog
        onContentBlur={() => {
          this.setState({ dialogOpen: false });
          console.log('onclose')
        }}
        content={this.content}
        isOpen={this.state.dialogOpen}
        placement="bottom"
        onContentClick={() => {
          console.log('oncontent')
        }}
      >
        <div>
          <Button
            appearance="primary"
            isSelected={this.state.dialogOpen}
            onClick={this.toggleDialog}
          >
            {this.props.deployment}
          </Button>
        </div>
      </InlineDialog>
    );
  }


}