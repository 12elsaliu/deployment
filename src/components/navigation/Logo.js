import React from 'react';

import { B200, B400 } from '@atlaskit/theme/colors';

import { AtlassianLogo } from '@atlaskit/logo';

const Logo = () => {
  return (
    <div>
      <AtlassianLogo
        textColor={B400}
        iconColor={B200}
        iconGradientStart={B400}
        iconGradientStop={B200}
        style={{ margin: 20 }}
      />
    </div>
  )
}


export default Logo