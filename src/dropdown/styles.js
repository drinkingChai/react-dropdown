
import {styled} from 'styletron-react';

export const InputBox = styled('input', {
  fontSize: 'inherit',
  fontStyle: 'inherit',
  width: '100%',
});

export const DropdownListWrapper = styled('div', {
  borderWidth: '1',
  borderStyle: 'solid',
  borderColor: '#ccc',
  width: '100%',
});

export const DropdownItem = styled('div', {
  ':last-child': {
    borderBottomWidth: '0'
  },
  borderBottomWidth: '1',
  borderBottomStyle: 'solid',
  borderBottomColor: '#ccc',
});
