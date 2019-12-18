import React, {Component} from 'react';

class Control extends Component {
    render() {
        const {onChangeMode} = this.props;
        return (
        <div>
            <li><a 
                href="/create"
                onClick={function(e){
                    e.preventDefault();
                    onChangeMode('create');
                }}>create</a></li>
            <li><a 
                href="/update"
                onClick={function(e){
                    e.preventDefault();
                    onChangeMode('update');
                }}>update</a></li>
            <li><input 
                type="button" 
                value="delete"
                onClick={function(e){
                    e.preventDefault();
                    onChangeMode('delete');
                }}></input></li>
        </div>
        );
    }
}
export default Control;