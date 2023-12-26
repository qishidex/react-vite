import { DataResult } from '@progress/kendo-data-query';
import { ButtonProps } from '@progress/kendo-react-buttons';
import {
  GridCustomCellProps,
  GridColumnProps,
  GridProps
} from '@progress/kendo-react-grid';
import { BaseModel } from '../../models';
import { GridSelectionChangeEvent } from '@progress/kendo-react-grid';

export interface IDataResult<T extends BaseModel> extends Omit<DataResult,'data'> {
  data:Array<T>
}

export interface IActionGridProps<T extends BaseModel> 
  extends Omit<GridProps,('data'|'columns'|'dataItemKey'|'selectedField')> {
  data: Array<T> | null;
  columns: Array<IActionGridColumn<T>>;

  selectEnable?:boolean
  selectField?:keyof T & string
  dataItemKey?:keyof T & string
  actionButtons?: Array<IActionButtonProps<T>>
  actionCellWidth?:number
  
  onSelectionChange?:(e:GridSelectionChangeEvent)=>void
}

export interface ISelected {
  selected: boolean
}


export interface IActionGridColumn<T extends BaseModel>
  extends Omit<GridColumnProps,'field'> {
  field: keyof T & string;
}
export interface IActionCellButtonProps<T> extends Omit<GridCustomCellProps,'dataItem'> {
  dataItem?:T
}
export interface IActionButtonProps<T> extends Omit<ButtonProps,'onClick'> {
  // dataItem: T;
  action: 'update' | 'delete' | 'view';
  onClick?: (dataItem?: T) => void;
}
