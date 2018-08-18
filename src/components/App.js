import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/index'

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

// const App = () => {
// 	const profiles = [
// 	{
// 		name: "Taro", age: 10
// 	},
// 	{
// 		name: "Hanako", age: 5
// 	},
// 	{
// 		name: "NoName"
// 	}]
// 	return (
// 		<div>
// 			{
// 				profiles.map( (profile, index)  => {
// 					return <User name={profile.name} age={profile.age} key={index} />
// 				})
// 			}
// 		</div>
// 	)
// }
// // propsは変更不可能な値
// const User = (props) => {
// 	return <div>Hi, I am {props.name}, and {props.age} years old! </div>
// }

// User.defaultProps = {
// 	age: 1
// }

// User.propTypes = {
// 	name: PropTypes.string,
// 	age: PropTypes.number.isRequired
// }

// stateは変更可能な値
// const App = () => (<Counter></Counter>)

// class Counter extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { count: 0 }
// 	}

// 	handlePlusButton = () => {
// 		// これはダメ。renderされないからDOMが更新されない
// 		// this.state = { count: this.state.count + 1}

// 		// setStateが実行されるとrenderも実行される
// 		this.setState({ count: this.state.count + 1 })
// 	}

// 	handleMinusButton = () => {
// 		this.setState({ count: this.state.count - 1 })
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				<div>count: { this.state.count } </div>
// 				<button onClick={this.handlePlusButton}>+1</button>
// 				<button onClick={this.handleMinusButton}>-1</button>
// 			</React.Fragment>
// 		)
// 	}
// }

class App extends Component {
	// 初期化はreducerで行う

	// actioncreaterで実行するため必要ない

	render() {
		const props = this.props
		console.log(props)
		return (
			<React.Fragment>
				<div>count: { props.value } </div>
				<button onClick={props.increment}>+1</button>
				<button onClick={props.decrement}>-1</button>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	value: state.count.value
})

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement())
})

// dispatchは以下でもよい
// const mapDispatchToProps = ({
// 	increment, decrement
// })

export default connect(mapStateToProps, mapDispatchToProps)(App)

