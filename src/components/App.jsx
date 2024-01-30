import React from 'react'
import "./App.css";

const App = ({title}) => {
  return (
	<div>
		<h1 className='test-class'>{title}</h1>
		<div>React App 1</div>
	</div>
  )
}


export default App