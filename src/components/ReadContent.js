import React, {Component} from 'react';

class ReadContent extends Component {
    render() {
      const {title, desc} = this.props;
      return (
        <article>
          <h2>{title}</h2>
          {desc}
        </article>
      )
    }
}

export default ReadContent;