
import React from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button/standard-button';
import './FindId.css'
const { v4: uuidv4 } = require('uuid');

const FindId = () => {

  return (
    <div className='inputContainer' >
      <form>
        <div className='textField'>
          <label htmlFor='APP_id' style={{ fontWeight: 'bold' }}>App ID</label>
          <Textfield
            placeholder={uuidv4()}
            name='APP_id'
            id='APP_id'
          />

        </div>

        <div className='textField'>
          <label htmlFor='ENV_id' style={{ fontWeight: 'bold' }}>Env ID</label>
          <Textfield
            placeholder={uuidv4()}
            name='ENV_id'
            id='ENV_id'
          />
        </div>

        <div className='textField'>
          <label htmlFor='DEPL_ID' style={{ fontWeight: 'bold' }}>Deployment ID</label>
          <Textfield
            placeholder={Math.floor(Math.random() * 101)}
            name='DEPL_ID'
            type='number'
            min='1'
          />
        </div>

        <div className='button'>
          <Button type="submit" appearance="primary">
            Find
          </Button>
        </div>
      </form>
    </div>
  )
}
export default FindId