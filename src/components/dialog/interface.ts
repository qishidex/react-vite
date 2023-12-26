import {DialogProps} from '@progress/kendo-react-dialogs';


export interface IDialog extends DialogProps{
  initDisplay:boolean
  onChangeDisplay:(display:boolean) => void
}
