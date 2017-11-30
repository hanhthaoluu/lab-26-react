import React from 'react';
import ReactDom from 'react-dom';

import './style/main.scss';

const cowsay = require('cowsay');

const Faker = require('Faker');

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  };
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.getFakeName = this.getFakeName.bind(this);


    this.state = {
      content: cowsay.say({text: "Hello there, click on the button below  to see what Santa is saying!"})


    }
  }

  getFakeName(e) {

    let randomName = Faker.Name.findName();
    let string = 'Hello ' + randomName + '! What Do You Want for Christmas?';
    let content = cowsay.say({text: string});
    this.setState({content});
  }

  render() {
    return (
      <div>
        <Header />
        <pre className="cowsay">{this.state.content}</pre>
        <button onClick={this.getFakeName} className="fakeName">Click Me</button>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
