import React, { Component } from 'react';
import './Container.css';

export const Container = function(props){
  return (
    <div
      className="storybook-decorator-container"
    >
      {props.story()}
    </div>
  );
}
