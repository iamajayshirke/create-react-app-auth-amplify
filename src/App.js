import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React, { Component } from 'react';
import './App.css';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <h2>Welcome To Content</h2>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
