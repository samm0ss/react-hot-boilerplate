import React, { Component, PropTypes } from 'react';
import { Table, Tr, Th, Thead, Td } from 'reactable';



class Samtable7 extends React.Component {
  static defaultProps = {
    currentPage: 0,
  }
  state = {
    names: this.props.names,
    data: this.props.data,
  }
  static propTypes = {
    currentPage: React.PropTypes.number.isRequired,
    names: React.PropTypes.array.isRequired,
  }
  componentDidMount = () => {
    console.log(this.state.names);
    console.log(this.state)
  }
  render () {
		return (
			<div className="samtable7">
			<Table className="table"
			id="table" data={this.props.data} currentPage={2}
			itemsPerPage={4} pageButtonLimit={5} />
			</div>
		)
	}
}

export default Samtable7


// class Schedule extends React.Component {

// }

// class Samtable extends React.Component {

// 	// Initial state & Invoking methods
// 	// es6
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			names: props.names,
// 			data: props.data
// 		};
// 	    // this.examplemethod = this.examplemethod.bind(this); // need to manually bind methods to the component instance
//     }
// 	// // examplemethod(event) {
// 	// // 	this.setState({example: this.state.example})
// 	// // }
// 	// // // es7 initial state
// 	// // state = {
// 	// // 	names: this.props.names
// 	// // };
// 	// // // es7 Invoking methods The (event) => {} is ES6 arrow function which preserves `this` context when it is called.
// 	// // examplemethod = (event) => {
// 	// // 	this.setState({example: this.state.example})
// 	// // }



//     static propTypes = {
// 	    names: PropTypes.array.IsRequired,
//   	};

//  //  	onChange(inputName, e) {
//  //    this.setState({
//  //      [`${inputName}Value`]: e.target.value,
// 	//     });
// 	//   }
// 	// }
//    	componentDidMount = () => {
//     	console.log(this.state.names);
//   	}
// 	render () {
// 		return (
// 			<div className="samTable">
// 			<Table className="table"
// 			id="table" data={this.props.data} 
// 			itemsPerPage={4} pageButtonLimit={5} />
// 			</div>
// 		)
// 	}
// }

// export default Samtable


// https://toddmotto.com/react-create-class-versus-component/
// const Samtable = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 			<Table className="table"
// 			id="table" data={[4
// 			{ Name: 'Griffin Smithers', Age: '18' },
// 			{ Age: '23',  Name: 'Lee Salminen' },
// 			{ Age: '28', Position: 'Developer' },
// 			{ Name: 'Griffin Smith', Age: '18' },
// 			{ Age: '30',  Name: 'Test Person' },
// 			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
// 			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
// 			{ Age: '23',  Name: 'Ender of this Page', Position: 'CEO' },]} 
// 			itemsPerPage={4} pageButtonLimit={5} />
// 			</div>
// 		)
// 	}
// })

// export default Samtable;


// export default class App extends Component {
//   render() {
//     return (
//       <h1>Hello, world.</h1>
//     );
//   }
// }