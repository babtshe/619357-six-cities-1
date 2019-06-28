import React, {PureComponent} from 'react';
import {propTypes} from './with-active-item.props';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        clickedItem: null,
      };
      this.setClickedItem = this.props.setClickedItem || this.setClickedItem.bind(this);
    }

    setClickedItem(item) {
      this.setState({
        clickedItem: item,
      });
    }

    render() {
      return <Component
        {...this.props}
        setClickedItem = {this.setClickedItem}
        clickedItem = {this.state.clickedItem}
      />;
    }
  }

  WithActiveItem.propTypes = propTypes;
  return WithActiveItem;
};

export default withActiveItem;
