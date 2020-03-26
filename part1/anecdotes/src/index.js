import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.from({ length: props.anecdotes.length }).fill(0));

  const handleRandomAnectode = () => {
    const random = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(random)
  }

  const handleVote = () => {
    const updatedVotes = votes.map((vote, i) => i === selected ? ++vote : vote);
    setVotes(updatedVotes)
  }

  const getMostVoted = () => {
    const max = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(max);
    return props.anecdotes[mostVotedIndex]
  }

  let mostVoted;

  if(votes.some(vote => vote !== 0)) {
    mostVoted = getMostVoted();
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote anecdote</button>
      <button onClick={handleRandomAnectode}>Next anectode</button>
      <hr/>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{mostVoted}</p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)