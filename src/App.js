import React, { Component } from 'react';

class App extends Component {
  render() {
  	// const greeting = "Hi!!";
  	// CSSのクラスはキャメルケース
  	// const dom = <h1 className="greet">{greeting}</h1>;
  	// return dom;
  	// forとは書けない
  	// returnするDOMは一つだけ
  	// divを使いたくないならReact.Fragmentを使う
  	return (

  		<React.Fragment>
  			<input type="text" onClick={() => {console.log("clicked!")}}/>
  			<label htmlFor="bar">Bar</label>
  		</React.Fragment>
  	)
  }
}

export default App;
