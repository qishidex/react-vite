import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { IDialog } from ".";
import { useState } from "react";

export const FromDialog = (props:IDialog) =>{
    const {initDisplay,onChangeDisplay,children, ...others} = props
    const [visible,setVisible] = useState<boolean>(initDisplay)

    const handleOnClose = (event: DialogCloseEvent) => {
      console.log(event)
      setVisible(false)
      onChangeDisplay(false)
    }



    return (
        <>
        { 
          visible === true && (<Dialog onClose={handleOnClose} {...others}>
            {children}
            <DialogActionsBar>
              
            </DialogActionsBar>
          </Dialog>)
        }
        </>
    )
}