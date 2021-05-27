import React from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import './DisplayTable.css';
import { head, rows } from '../../data/sampledata'



const DisplayTable = () => {

  return (
    <div className='box'>
      <div className='tableContainer'>
        <DynamicTable
          head={head}
          rows={rows}
          rowsPerPage={5}
          defaultPage={1}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          defaultSortKey="term"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />
      </div>
    </div>



  )
}

export default DisplayTable;

