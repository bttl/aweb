import React from 'react';

export class Btn extends React.Component {
  // constructor(props){
  //     super(props);
  // }

  render() {

    var style = this.props.style || {};

    style.cursor = 'pointer';
    style.backgroundColor = style.backgroundColor || '#eee';

    var opts = {
      // onPress for mobiles
      onClick: (e) => {
        this.props.onClick(e);
      },      
      style: style,
      children: this.props.children
    };

    if (this.props.underlayColor){
      opts.onMouseEnter = (e) => {
        e.target.style.backgroundColor = this.props.underlayColor;
      };
      
      opts.onMouseLeave = (e) => {
        e.target.style.backgroundColor = style.backgroundColor;
      };
    }
    
    return React.DOM.button(opts);
  }
}

Btn.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
