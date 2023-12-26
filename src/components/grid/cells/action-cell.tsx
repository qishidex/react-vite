import { Button } from '@progress/kendo-react-buttons';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { BaseModel } from '../../../models';
import { IActionButtonProps, IActionCellButtonProps } from '../interface';
import * as React from 'react';

export const _ActionCell = <T extends BaseModel>(props: IActionCellButtonProps<T>) => {
  const { dataItem,children,onClick,...others } = props;
  console.log(props)
  const onActionClick = (
    event:any
  ) => {
    console.log(event,dataItem)
    onClick && onClick(props.dataItem);
  };

  return (
    <td
      style={props.style}
      className={props.className}
      role={'gridcell'}
      aria-colindex={props.ariaColumnIndex}
    >
      <div className={'action-cell-button-list'}>
        <Tooltip parentTitle anchorElement={'target'} className={'k-tip'}>
          {/* {buttons.map((button, index) => {
            const { action, onClick, text, ...others } = button;
            return (
              <Button
                key={`ActionBtn-${index}`}
                onClick={onActionClick}
                {...others}
              >
                {text}
              </Button>
            );
          })} */}
          <Button onClick={onActionClick} {...others} >{children}</Button>
        </Tooltip>
      </div>
    </td>
  );
};

export const ActionCell = React.memo(_ActionCell);
