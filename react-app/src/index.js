import React from 'react';
import ReactDOM from 'react-dom';
import MyReactDOM from './myReact/MyReactDom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const reactE = <section>
  <header>Counter:0</header>
  <button>+</button><button>-</button>
</section>;


const Button = ({data}) => {
  return(
    <button> {data} </button>
  )
}



class Counter extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  state = {
    counter: 0,
    title: "Counter"
  }

  static getDerivedStateFromProps(props, state) {
    // 
    if (props.title) {
      return { ...state, title: props.title };
    }
    return state;
  }
  render() {
    console.log("STATE", this.state)
    return <section>
      <header>{this.state.title}:{this.state.counter}</header>
      <button>+</button><button>-</button>
      <Button data="Functional Component Button "/>
    </section>;
  }
  componentDidMount() {
    console.log("section", document.querySelector('section'))
  }
}



MyReactDOM.render(
  <Counter title="MyCounter" />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
