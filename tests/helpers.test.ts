import { tableData } from '../src/data/items';
import {search, tableFilter} from '../src/utils/helpers';

describe('helpers', () => {
  test('Search with a single string', () => {
    const w = '2';
    expect(search(tableData, w)).toEqual(expect.arrayContaining(tableData));
  });

  test('Search with comma seperated string', () => {
    const w = '2,how';
    expect(search(tableData, w)).toEqual(expect.arrayContaining(tableData));
  });

  test('Filter with just item ID', () => {
    const w = '2';
    expect(tableFilter(tableData, w)).toEqual(expect.arrayContaining(tableData));
  });

  test('Filter with just item ID & order number', () => {
    const w = '714';
    const order = '32838';
    const result = tableFilter(tableData, w, order);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
  test('Show all items if the show all option is checked', () => {
    const w = '';
    const order = '';
    const type = ['ALL']
    const result = tableFilter(tableData, w, order, type);
    expect(result).toEqual(tableData);
  });

});