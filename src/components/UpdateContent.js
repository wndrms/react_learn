import React, {Component} from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.content.id,
            title: this.props.content.title,
            desc: this.props.content.desc,
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
      const {id, title, desc} = this.state;  
      const {onSubmit} = this.props;
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              onSubmit(id, title, desc);
            }} >
            <input type="hidden" name="id" value={id}></input>
            <p>
              <input 
                type="text" 
                name="title"
                value={title}
                onChange={this.inputFormHandler} ></input>
            </p>
            <p>
              <textarea
                name="desc"
                value={desc}
                onChange={this.inputFormHandler}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      )
    }
}

export default UpdateContent;