import React from 'react';

export class Lister extends React.Component {
  constructor(props){
    super(props);

    // var dsNew = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => {
    //     return row1 !== row2;
    //   }
    // }).cloneWithRows(this.props.arr);
    
    // this.state = {
    //   ds: 
    // };
  }

  //  componentWillReceiveProps(nextProps) {
  //   // console.warn('ComponentWillReceiveProps');
  //   this.setState({
  //     ds: this.state.ds.cloneWithRows(nextProps.arr)
  //   });
  // }

  // list-style-type: none
  // margin: 0
  // padding: 0
  render() {
    var style = this.props.style || {};

    style.margin = 0;
    style.padding = 0;
    style.listStyleType = 'none';
    
    var list = React.DOM.ul({
      style: style
    }, this.props.arr.map((row) => {
      var itemElem = this.props.renderRow(row);
      
      return React.DOM.li({
        key: row.id
      }, itemElem);
    }));

    return list;
    
    // return React.DOM.div({
    //   style: this.props.style,
    //   dataSource: this.state.ds,
    //   renderRow: (row) => this.props.renderRow(row)
    // });
  }
}

Lister.propTypes = {
  arr: React.PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired
};
