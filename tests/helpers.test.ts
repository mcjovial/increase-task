import { tableData } from '../src/data/items';
import {search} from '../src/utils/helpers';

describe('helpers', () => {
  test('Search with a single string', () => {
    const w = '2';
    expect(search(tableData, w)).toEqual(expect.arrayContaining(tableData));
  });

  test('Search with comma seperated string', () => {
    const w = '2,how';
    expect(search(tableData, w)).toEqual(expect.arrayContaining(tableData));
  });

});