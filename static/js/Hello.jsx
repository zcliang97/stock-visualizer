import React from 'react'

export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {greetings: "Hello " + this.props.name};

        this.getPythonHello = this.getPythonHello.bind(this);

        var $ = require('jquery');
    }

    getPythonHello(){
        $.get(window.location.href + 'hello',  (data) => {
            console.log(data);
            this.personalizeGreeting(data);
        })
    }

    personalizeGreeting(greeting){
        this.setState({ greeting: greeting + ' ' + this.props.name + '!'});
    }

    render(){
        return(
            <h1>{ this.state.greeting }</h1>
            <hr/>
            <Button onClick={ this.getPythonHello }>
                Say Hello!
            </Button>
        );
    }
}