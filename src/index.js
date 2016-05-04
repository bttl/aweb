import React from 'react';

import { Lister } from './lister';
import { Btn } from './btn';

// StyleSheet.create construct is optional but
//   provides some key advantages.
// It ensures that the values are immutable and opaque by transforming them into plain numbers that reference an internal table.
// By putting it at the end of the file, you also ensure that they are only created once for the application and not on every render.
var sts = {
  create: function(obj){
    return obj;
  }
};

class View extends React.Component {
  render() {
    var style = this.props.style || {};
    style.display = 'flex';
    return React.DOM.div({
      style: style
    }, this.props.children);
  }
}

class Text extends React.Component {
  render() {
    var style = this.props.style || {};
    style.whiteSpace = 'pre-wrap';
    // margin 0 for paragraph
    style.margin = style.margin || 0;
    style.padding = style.padding || 0;
    
    return React.DOM.p({
      style: style
    }, this.props.children);
  }
}

class Scroller extends React.Component {
  render() {
    var style = this.props.style || {};
    style.overflow = 'auto';
    style.overflowX = 'hidden';
    
    return React.DOM.div({
      style: style
    }, this.props.children);
  }
}

export default {
  View,
  Text,
  Btn,
  Lister,
  Scroller
};

export { sts };
