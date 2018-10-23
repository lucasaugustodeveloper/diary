import React, { Component } from 'react';

import Input from '../../components/input';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import './App.css';

class App extends Component {
  render() {
    return <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form>
              <div className="form-group">
                <Input type="text" name="title" placeholder="Title..." txtClass="form-control no-border" />
              </div>

              <div className="form-group">
                <Textarea txtClass="form-control no-border" name="body" placeholder="Body..." type="text" />
              </div>

              <div className="form-group">
                <Button type="button" className="btn btn-success col-sm-12" txt="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>;
  }
}

export default App;
