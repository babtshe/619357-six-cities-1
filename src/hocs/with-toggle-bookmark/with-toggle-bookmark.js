import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {compose} from 'redux';
import {propTypes} from './with-toggle-bookmark.props';
import withPrivateRoute from '../with-private-route/with-private-route';
import {sendBookmarkedStatus} from '../../redux/operations';
import {getAuthStatus} from '../../redux/selectors';

const withToggleBookmark = (Component) => {
  class WithToggleBookmark extends PureComponent {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.state = {
        clicked: false,
      };
    }

    render() {
      const ComponentWrapped = withPrivateRoute(Component);
      if (this.state.clicked) {
        return (
          <ComponentWrapped
            {...this.props}
            onClick={this.onClick}
            bookmarked={this.props.bookmarked}
          />
        );
      }
      return (
        <Component
          {...this.props}
          onClick={this.onClick}
          bookmarked={this.props.bookmarked}
        />
      );
    }

    onClick() {
      this.setState({
        clicked: true,
      });
      if (this.props.isAuthorized) {
        this.props.sendBookmarkedStatus(this.props.id, +!this.props.bookmarked);
      }
    }
  }

  WithToggleBookmark.propTypes = propTypes;

  return hoistNonReactStatic(WithToggleBookmark, Component);
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthStatus(state),
});

const mapDispatchToProps = {
  sendBookmarkedStatus,
};

export {withToggleBookmark};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withToggleBookmark);
