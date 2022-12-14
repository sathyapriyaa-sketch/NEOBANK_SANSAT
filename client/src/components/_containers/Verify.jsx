import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userActions } from '../../_actions';
import Load from './Load';

const actions = {
  verify: userActions.verify,
};

const mapStateToProps = state => ({
  authentication: state.authentication,
});

/**
 * Verifies the cookies of the user before rendering the child component
 */
class VerifyContainer extends React.PureComponent {
  componentDidMount() {
    const { verify, authentication: { requiresLogin } } = this.props;
    if (requiresLogin) {
      verify();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Load>
        {children}
      </Load>
    );
  }
}

VerifyContainer.propTypes = {
  authentication: PropTypes.objectOf(PropTypes.any).isRequired,
  verify: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const Verify = connect(mapStateToProps, actions)(VerifyContainer);
