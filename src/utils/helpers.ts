import { IItem } from '../data/items';

const keys: (keyof IItem)[] = ['order_number', 'type', 'item_id', 'category', 'description'];

/**
 * Searches the table data provided against the query string provided.
 * @param {IItem[]} data - table items to be searched.
 * @param {string} query - Search string.
 * @returns {IItem[]} The resulting table items from the search.
 */
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

/**
 * Filters the table data and matches items with the provided parameters.
 * @param {IItem[]} tableData - table items to be searched.
 * @param {string} item_id - Item's id.
 * @param {string} order_number - Item's order number.
 * @param {string[]} checkboxOptions - An array of item types.
 * @returns {IItem[]} The resulting table items from the filter.
 */
export const tableFilter = (
  tableData: IItem[],
  item_id?: string,
  order_number?: string,
  checkboxOptions?: string[]
) => {
  return tableData.filter((item) => {
    if (!item_id && !order_number && (!checkboxOptions || checkboxOptions.length === 0)) {
      return true;
    }

    const orderNumberMatch =
      !order_number || order_number === '' || item.order_number.toString().includes(order_number);

    const typeMatch =
      !checkboxOptions ||
      checkboxOptions.length === 0 ||
      checkboxOptions.includes('ALL') ||
      checkboxOptions.includes(item.type);

    const itemIdMatch = !item_id || item_id === '' || item.item_id.toString().includes(item_id);

    return orderNumberMatch && typeMatch && itemIdMatch;
  });
};
