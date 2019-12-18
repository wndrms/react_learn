import React, {Component} from 'react';
import './App.css';

import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      selected_content_id:2,
      subject: {title: 'WEB', sub:'World Wide Web!'},
      contents:[
        {id: 1, title:'HTML', desc: 'HTML is for information'},
        {id: 2, title:'CSS', desc: 'CSS is for design'},
        {id: 3, title:'JavaScript', desc: 'JavaScript is for interactive'},
      ],
    }
  }

  handlecontent = (id) => {
    this.setState({
      mode: 'read',
      selected_content_id: id,
    });
  }
  
  changewelcome = () =>{
    this.setState({
      mode: 'welcome',
    });
  }

  changemode = (_mode) => {
    this.setState({
      mode: _mode,
    });
  }

  createcontent = (title, desc)=>{
    const {contents} = this.state;
    var newcontents = contents.concat({id: contents.length+1, title: title, desc: desc});
    this.setState({
      mode: 'read',
      contents: newcontents,
      selected_content_id: contents.length+1,
    });
    /*this.setState({
      contents: [
        ...contents,
        {id: contents.length+1, title: title, desc: desc},
      ]
    });*/
  }

  updatecontent = (id, title, desc)=>{
    const {contents} = this.state;
    var newcontents = Array.from(contents);
    var i = 0;
    while(i < newcontents.length){
      if(newcontents[i].id===id){
        newcontents[i] = {id: id, title: title, desc: desc};
        break;
      }
      i++;
    }
    this.setState({
      mode: 'read',
      contents: newcontents,
    });
  }

  deletecontent = (id) => {
    const {contents} = this.state;
    var newcontents = Array.from(contents);
    var i=0;
    while(i < newcontents.length){
      if(newcontents[i].id === id){
        newcontents.splice(i,1);
      }
      i = i + 1;
    }
    this.setState({
      mode: 'welcome',
      contents: newcontents,
    });
  }

  render() {
    const {mode, welcome, subject, contents, selected_content_id} = this.state; 
    return (
      <div className="App">
        <Subject 
          title={subject.title} 
          sub={subject.sub}
          onChangePage={this.changewelcome.bind(this)}></Subject>
        <TOC 
          contents={contents}
          onChangePage={function(id){
            this.handlecontent(id);
          }.bind(this)}></TOC>
        <Control
          onChangeMode={function(mode){
            this.changemode(mode);
            if(mode === 'delete'){
              if(window.confirm('정말 삭제하시겠습니까?')) this.deletecontent(selected_content_id);
            }
          }.bind(this)}> </Control>
        {mode === 'welcome' &&
          <ReadContent title={welcome.title} desc={welcome.desc}></ReadContent>
        }
        {mode === 'read' &&
          <ReadContent title={contents[selected_content_id-1].title} desc={contents[selected_content_id-1].desc}></ReadContent>
        }
        {mode === 'create' &&
          <CreateContent
            onSubmit={
              function(_title, _desc){
                this.createcontent(_title, _desc);
              }.bind(this)
            }></CreateContent>
        }
        {mode === 'update' &&
          <UpdateContent
            content={contents[selected_content_id-1]}
            onSubmit={
             function(_id, _title, _desc){
              this.updatecontent(_id, _title, _desc);
             }.bind(this)
            }></UpdateContent>
        }
      </div>
    );
  }
}

export default App;
