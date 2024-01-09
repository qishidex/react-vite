import { BaseModel } from '.';
import { Address } from './model-address';
import { Company } from './model-company';
import { types } from 'mobx-state-tree';

export class User implements BaseModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;

  public static GetModel(){
    const model = types.model('User',{
      id:types.number,
      name:types.string,
      email:types.string,
      phone:types.string,
      website:types.string
    })
  }
}
