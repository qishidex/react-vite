import { IActionButtonProps, IActionGridColumn } from '../../components/grid/interface';
import { User } from '../../models';


export class Config{
 static DATA_ITEM_KEY = "id";
 static SELECTED_FIELD = "selected";


 static listColumns: Array<IActionGridColumn<User>> = [
  {
    field: 'id',
    title: 'No.',
    width: 50,
  },
  { field: 'name', title: 'Name', width: 150 },
  {
    field: 'username',
    title: 'User Name',
    width: 200,
  }];

  static gridActionButtons:Array<IActionButtonProps<User>> = [
    {
      action:'update',
      children:"Update",
      onClick:(data:User)=>{alert(data.name)}
    },{
      action:'delete',
      children:'Remove'
    }
  ]

}