import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const addVote = () => {
    for(let i = 0; i < props.anecdotes.length; i++){
      if(props.anecdotes[selected] === props.anecdotes[i]){
        const newVotes = [...votes]
        newVotes[i] += 1
        setVotes(newVotes)
      }
    }
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
        <p>
          has {votes[selected]} votes
        </p>
      </div>
      <div>
        <button onClick={addVote}>
          vote
        </button>
        <button onClick={() => setSelected(Math.floor(Math.random()*props.anecdotes.length))}>
          next anecdote
        </button>   
      </div>
      <h2>Anecdote with most votes</h2> 
      <div>
        {props.anecdotes[votes.findIndex(value => value === Math.max(...votes))]}
        <p>
          has {votes[votes.findIndex(value => value === Math.max(...votes))]} votes
        </p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)