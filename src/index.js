import React from 'react';
import ReactDOM from 'react-dom';
import Samtable7 from './App';

const names = ['sam', 'jeroen', 'marten', 'reinoud']
const data = [
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },
	{ Name: 'Sam', Age: '18' },]

ReactDOM.render(<Samtable7 data={data} names={names}/>, document.getElementById('root'));
