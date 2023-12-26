import { FromDialog, IActionCellButtonProps } from "../../../components/index"
import { User } from "../../../models/model-user"

/*
 * @Author: git config user.name && git config user.email
 * @Date: 2023-12-20 17:55:10
 * @LastEditors: git config user.name && git config user.email
 * @LastEditTime: 2023-12-20 18:01:48
 * @FilePath: \react-vite\src\pages\users\detail\edit.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export const EditDialog = (props:IActionCellButtonProps<User>) =>{
  const {editItem,buttons} = props
  console.log(editItem,buttons)
  return (<>
    <FromDialog/>
  </>)
}