import React from 'react';
import ReactDom from 'react-dom';

import './style/main.scss';

const cowsay = require('cowsay');

const Faker = require('Faker');

const randomName = Faker.Name.findName();

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


    this.state = {
      cowsayWhat: cowsay.say({text: "Hello World!"})


    }
  }

  render() {
    return (
      <div>
        <Header />
        <pre className="cowsay">{this.state.cowsayWhat}</pre>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
