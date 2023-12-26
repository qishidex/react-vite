import { BaseModel } from '.';
import { Address } from './model-address';
import { Company } from './model-company';

export class User implements BaseModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
