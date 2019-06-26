import React, {PureComponent} from 'react';
import {propTypes} from './with-active-item.props';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
        clickedItem: null,
      };
      this.setActiveItem = this.setActiveItem.bind(this);
      this.unsetActiveItem = this.unsetActiveItem.bind(this);
      this.setClickedItem = this.props.setClickedItem || this.setClickedItem.bind(this);
    }

    setActiveItem(item) {
      this.setState({
        activeItem: item,
      });
    }

    unsetActiveItem() {
      this.setState({
        activeItem: null,
      });
    }

    setClickedItem(item) {
      this.setState({
        clickedItem: item,
      });
    }

    render() {
      return <Component
        {...this.props}
        setActiveItem = {this.setActiveItem}
        unsetActiveItem = {this.unsetActiveItem}
        setClickedItem = {this.setClickedItem}
        clickedItem = {this.state.clickedItem}
      />;
    }
  }

  WithActiveItem.propTypes = propTypes;
  return WithActiveItem;
};

export default withActiveItem;
