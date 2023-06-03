import { IItem } from '../data/items';

const keys: (keyof IItem)[] = ['order_number', 'type', 'item_id', 'category', 'description'];
export const search = (data: IItem[], query: string) => {
  const searchTerms = query.split(',').map((term) => term.trim().toLowerCase());
  
  return data.filter((item: IItem) =>
    searchTerms.some((searchTerm) =>
      keys.some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm)
      )
    )
  );
};