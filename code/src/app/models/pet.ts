import {Category} from './category';
import {Tag} from './tag';


export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photo_urls: Array<string>;
  tags?: Array<Tag>;
  /**
   * pet status in the store
   */
  status?: StatusEnum;
}

export enum StatusEnum {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}

