import * as React from 'react'

import './App.css'

const welcome = {
  greeting : 'Hey',
  title : 'React'
}

function showGreeting(obj){
  return `${obj.greeting}, ${obj.title}`
}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

function App() {
  return (
    <>
      <div>
        <p>{showGreeting(welcome)}</p>

        <Search />

        <List />
      </div>
    </>
  )
}


function Search(){
  return(
    <>
      <label htmlFor="srch">Search: </label>
      <input type="text" id='srch' />
    </>
  )
}


function List(){
  return(
    <ul>
      {list.map(item => (
        <li key={item.objectID}>
          <p>title: {item.title}</p>
          <a href={item.url} target='_blank'>{item.title}</a>
          <p>author: {item.author}</p>
          <p>Number of Comments: {item.num_comments}</p>
          <p>Points: {item.points}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
