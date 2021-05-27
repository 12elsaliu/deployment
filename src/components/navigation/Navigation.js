import React from 'react';
import { AtlassianNavigation } from '@atlaskit/atlassian-navigation';
import './Navigation.css'
import { PrimaryButton } from '@atlaskit/atlassian-navigation';

import AtlassianLogo from './Logo'

const Navigation = ({ handleClick }) => {
  return (
    <div>
      <AtlassianNavigation
        primaryItems={[
          <PrimaryButton onClick={() => handleClick('deployment')} style={{ margin: 10 }} className='navButton'>Deployment page</PrimaryButton>,
          <PrimaryButton onClick={() => handleClick('start')} style={{ margin: 10 }} className='navButton'>Start garbage collection</PrimaryButton>,
        ]}
        renderProductHome={AtlassianLogo}
      />
    </div>
  )
}

export default Navigation