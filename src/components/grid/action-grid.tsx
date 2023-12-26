import {
  Grid,
  GridColumn,GridSelectionChangeEvent,getSelectedState,GridHeaderSelectionChangeEvent 
} from '@progress/kendo-react-grid';
import * as React from 'react';
import { BaseModel } from '../../models/index';
import { IActionGridProps,IActionGridColumn, IActionCellButtonProps, IActionButtonProps } from './interface';
import { getter } from "@progress/kendo-react-common";
import { ActionCell } from './cells/action-cell';

export const GridTable = <T extends BaseModel>(props: IActionGridProps<T>) => {
  const { actionButtons,actionCellWidth,columns,data,selectEnable,dataItemKey,selectField,onSelectionChange, ...others } = props;
  const [source,setSource]=React.useState<Array<T>>(data.map((item:T)=>Object.assign({selected:false},item)));
  const [selectedState, setSelectedState] = React.useState<{
    [id: string]: boolean | number[];
  }>({});

  const idGetter = getter(dataItemKey);

  React.useEffect(()=>{
    if(data && data.length > 0){
      setSource(data)
    }
  },[data])

  function renderColumns() {
    return columns.map((col:IActionGridColumn<T>,index:number) =>{
      const {field,...others} = col
      return (
        <GridColumn key={index} field={field} {...others} />
      )
    });
  }

  const setGridData = () =>{
    if(selectEnable && selectField){
      return source?.map((item)=>({
        ...item,
        selected:selectedState[idGetter(item)]
      }))
    }else{
      return source
    }
  }

  const handleSelectionChange =React.useCallback((event:GridSelectionChangeEvent) =>{
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: dataItemKey,
    });
    setSelectedState(newSelectedState);
    console.log(newSelectedState)
    if(onSelectionChange){
      onSelectionChange(event)
    }
  },[dataItemKey, onSelectionChange, selectedState])

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent) => {
      const checkboxElement = event.syntheticEvent.target;
      const checked = checkboxElement.checked;
      const newSelectedState = {};

      event.dataItems.forEach((item: any) => {
        newSelectedState[idGetter(item)] = checked;
      });
      setSelectedState(newSelectedState);
    },
    [idGetter]
  );

  const GetActionButtons = (e:IActionCellButtonProps<T>,button:IActionButtonProps<T>) => {
    console.log(e)
    if(actionButtons){
      
        const {action,children,...others} = button;
        return <ActionCell action={action} dataItem={e.dataItem} {...others}>{children}</ActionCell> 
    }else{
      return undefined
    }
  }

  return (
    <>
      <Grid
        style={{ height: '420px' }}
        data={setGridData()}
        onSelectionChange={handleSelectionChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
        dataItemKey={dataItemKey}
        selectedField={selectField}
        {...others}
      >
        <GridColumn
          field={selectField}
          width="50px"
          headerSelectionValue={
            source.findIndex((item) => !selectedState[idGetter(item)]) === -1
          }
        />
        {actionButtons && actionButtons.map((item,index:number)=><GridColumn title={item.action}
          cell={(e:IActionCellButtonProps<T>)=>GetActionButtons(e,item)}
          width={actionCellWidth}
        />)} 
        {renderColumns()}
      </Grid>
    </>
  );
};

//  export const ActionGrid = React.memo(GridTable);
