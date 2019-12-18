import React, {Component} from 'react';

class Subject extends Component {
    render() {
        const {title, sub, onChangePage} = this.props;
        return (
        <header>
            <h1><a 
                href="/"
                onClick={function(e){
                    e.preventDefault();
                    onChangePage();
                }} >{title}</a></h1>
            {sub}
        </header>
        );
    }
}
export default Subject;