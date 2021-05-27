import React from 'react';
import Lozenge from '@atlaskit/lozenge';

const GarbageReason = ({ reason }) => {
  if (reason === 'OBSOLETE_APP') {
    return (
      <Lozenge>{reason}</Lozenge>
    )
  } else if (reason === 'OBSOLETE_DEPLOYMENT') {
    return (
      <Lozenge appearance="new">{reason}</Lozenge>
    )
  } else {
    return ''
  }
}

export default GarbageReason