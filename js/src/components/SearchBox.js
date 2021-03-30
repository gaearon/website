import React, { Component } from 'react';
import { SearchBox as AisSearchBox } from 'react-instantsearch-dom';

export class SearchBox extends Component {
  state = { active: false };

  handleFocus = () =>
    this.setState({
      active: true,
    });

  handleBlur = () =>
    this.setState({
      active: false,
    });

  render() {
    return (
      <div className={'full-searchbox ' + (this.state.active ? 'active' : '')}>
        <AisSearchBox
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props}
        />
      </div>
    );
  }
}
