import React from 'react';

import Dropdown from '../dropdown';

const DROPDOWN_ITEMS = [
  'New York',
  'San Francisco',
  'Tokyo',
  'Hong Kong',
  'Dubai',
  'New Delhi',
];

function mockApiCall() {
  return DROPDOWN_ITEMS;
}

function Extension() {
  return <Dropdown onChangeFunction={mockApiCall} />;
}

export default Extension;
