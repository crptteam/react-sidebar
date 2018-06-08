import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Blocker from '../styled/Blocker';
import Panel from '../styled/Panel';
import Wrapper from '../styled/Wrapper';

class Sidebar extends Component {
  render() {
    const { active, theme } = this.props;

    return (
      <Wrapper className={active ? 'active' : ''} theme={theme}>
        <Blocker onClick={this.props.onClose} theme={theme} />
        <Panel theme={theme}>
          {this.props.children}
        </Panel>
      </Wrapper>
    )
  }
}

Sidebar.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Sidebar;