import React, {PureComponent} from 'react';
import {propTypes} from './with-options.props';

const OPTIONS = [
  {
    name: `Popular`,
    type: `popular`,
    descending: true,
  },
  {
    name: `Price: low to high`,
    type: `price`,
    descending: false,
  },
  {
    name: `Price: high to low`,
    type: `price`,
    descending: true,
  },
  {
    name: `Top rated first`,
    type: `rating`,
    descending: true,
  }
];

const withOptions = (Component) => {
  class WithOptions extends PureComponent {
    constructor(props) {
      super(props);
      this.options = this.props.options || OPTIONS;
      this.onToggle = this.onToggle.bind(this);
      this.onClick = this.onClick.bind(this);
      this.state = {
        isOpened: this.props.isOpened || false,
        activeOptionName: (this.findOptionByparams(this.props.activeParams) || OPTIONS[0]).name,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpened={this.state.isOpened}
          options={this.options}
          activeOptionName={this.state.activeOptionName}
          onToggle={this.onToggle}
          onClick={this.onClick}
        />);
    }

    onToggle() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
      }));
    }

    onClick(name) {
      if (name !== this.state.activeOptionName) {
        this.setState({
          activeOptionName: name,
          isOpened: false,
        });
        const clickedOption = this.options.find((item)=> item.name === name);
        this.props.onClick(clickedOption);
      }
    }

    findOptionByparams(params) {
      if (!params) {
        return null;
      }
      return this.options.find((option)=>(option.type === params.sort) && (option.descending.toString() === params.descending));
    }


  }

  WithOptions.propTypes = propTypes;

  return WithOptions;
};

export default withOptions;
