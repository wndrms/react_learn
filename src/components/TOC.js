import React, {Component} from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    if(this.props.contents === newProps.contents) return false;
    return true;
  }
  render() {
    var lists = [];
    const {contents, onChangePage} = this.props;
    var i = 0;
    while(i < contents.length){
        lists.push(<li key={contents[i].id}><a 
          href={"/"}
          onClick={function(id, e){
            e.preventDefault();
            onChangePage(id);
          }.bind(this, contents[i].id)}>{contents[i].title}</a></li>);
        i = i + 1;
    }
    return (
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC;