import React from 'react';
import Lozenge from '@atlaskit/lozenge';

const Status = ({ status, errorDetails }) => {
  if (status === 'DONE') {
    return (
      <Lozenge appearance='success'>{status}</Lozenge>
    )
  } else if (status === 'FAILED') {
    return (
      <div>
        <Lozenge appearance="removed">{status}</Lozenge>
        <div>
          Failed message:
          <p>{errorDetails.message}</p>
        </div>
        <div>
          Failed code:
          <p className='mono'>{errorDetails.code}</p>
        </div>
      </div>

    )
  } else {
    return (
      <Lozenge appearance="inprogress">{status}</Lozenge>
    )
  }
}

export default Status