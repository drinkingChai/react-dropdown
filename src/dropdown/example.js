import React from 'react';

import Dropdown from '../dropdown';

const DROPDOWN_ITEMS = ['item 1', 'item 2', 'item 3', 'item 4'];

function Example() {
  return <Dropdown onChangeFunction={() => DROPDOWN_ITEMS} />;
}

export default Example;
