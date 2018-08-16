import React, { Component } from 'react';
import PropTypes from "prop-types";

// class App extends Component {
//   render() {
//   	// const greeting = "Hi!!";
//   	// CSSのクラスはキャメルケース
//   	// const dom = <h1 className="greet">{greeting}</h1>;
//   	// return dom;
//   	// forとは書けない
//   	// returnするDOMは一つだけ
//   	// divを使いたくないならReact.Fragmentを使う
//   	return (

//   		<React.Fragment>
//   			<input type="text" onClick={() => {console.log("clicked!")}}/>
//   			<label htmlFor="bar">Bar</label>
//   		</React.Fragment>
//   	)
//   }
// }

// const App = () => {
// 	return (
// 		<div>
// 			<Cat />
// 			<Cat />
// 			<Cat />
// 			<Cat />
// 		</div>
// 	)
// }

// 関数の形でもコンポーネントは定義できる
// const Cat = () => {
// 	return <div>Meow!</div>
// }

const App = () => {
	const profiles = [
	{
		name: "Taro", age: 10
	},
	{
		name: "Hanako", age: 5
	},
	{
		name: "NoName"
	}]
	return (
		<div>
			{
				profiles.map( (profile, index)  => {
					return <User name={profile.name} age={profile.age} key={index} />
				})
			}
		</div>
	)
}

const User = (props) => {
	return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
	age: 1
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}

export default App;
