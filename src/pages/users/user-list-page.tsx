import * as React from 'react'
import {GridTable, IActionButtonProps} from '../../components/index';
import { User } from '../../models/index';
import {Config} from './config'

export const UserGridList = () =>{
  const [data,setData] = React.useState<Array<User>>([])
  
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const gridActionButtons:Array<IActionButtonProps<User>> = [
    {
      action:'update',
      children:"Update"
    },{
      action:'delete',
      children:'Remove'
    }
  ]

  return (
    <>
      <GridTable<User> 
        selectEnable
        data={data} 
        columns={Config.listColumns} 
        selectField={Config.SELECTED_FIELD}
        dataItemKey={Config.DATA_ITEM_KEY}
        selectable={{
          enabled: true,
          drag: false,
          cell: false,
          mode: "multiple",
        }}
        actionButtons={Config.gridActionButtons}
        ></GridTable>
    </>
  )
}