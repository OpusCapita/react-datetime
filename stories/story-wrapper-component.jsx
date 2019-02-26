/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
// Use src_docs styles
import '../src_docs/app.component.scss';
import './test-story.scss';

export const StoryComponentWrapper = ({ children }) => {
  StoryComponentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div id="story-component-wrapper">
      <div id="story-component-container">
        { children }
      </div>
    </div>
  );
};


export const StoryHOCComponentWrapper = (Component, customProps) => {
  return class extends React.Component {
    render() {
      return (
        <div id="story-component-wrapper">
          <div id="story-component-container">
            <Component {...this.props} {...customProps} />
          </div>
        </div>
      );
    }
  };
};
