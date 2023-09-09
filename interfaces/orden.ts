import { OrdenItemsById } from './ordenItemsById';

export interface Orden {
  id: string;
  items: OrdenItemsById;
  user: string;
  state: string;
  date: number;
}
