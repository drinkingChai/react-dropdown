import React from 'react';
import {InputBox, DropdownListWrapper, DropdownItem} from './styles';

function DropdownList({items}) {
  if (!items.length) {
    return <></>;
  }

  return (
    <DropdownListWrapper>
      {items.map((item, idx) => (
        <DropdownItem key={idx}>{item}</DropdownItem>
      ))}
    </DropdownListWrapper>
  );
}

function getItems(items) {
  return items && items.length ? items : ['No results'];
}

class Dropdown extends React.PureComponent {
  state = {
    inputText: '',
    dropdownItems: [],
  };

  getDropdownItems = async (value) => {
    const {onChangeFunction} = this.props;
    const items = await onChangeFunction(value);

    return getItems(items);
  }

  handleChange = async ({target: {value}}) => {
    let items = [];

    if (value.length > 0) {
      items = await this.getDropdownItems(value);
    }

    this.setState({
      inputText: value,
      dropdownItems: items,
    });
  };

  handleBlur = () => {
    this.setState({
      dropdownItems: [],
    });
  };

  render() {
    const {inputText, dropdownItems} = this.state;

    return (
      <div>
        <InputBox
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={inputText}
        />
        <DropdownList items={dropdownItems} />
      </div>
    );
  }
}

export default Dropdown;
