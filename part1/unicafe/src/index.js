import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ preference, onClick }) => {
  return (
    <button onClick={onClick}>{preference}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td><strong>{text}</strong></td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  let positiveFeedback = 0;
  let average = 0;

  if (good > 0) {
    positiveFeedback = (100 * good) / total;
    average = ((good * 1) + (bad * -1)) / total;
  }

  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <table>
          <tbody>
            <Statistic text='good' value={good} />
            <Statistic text='neutral' value={neutral} />
            <Statistic text='bad' value={bad} />
            <Statistic text='all' value={total} />
            <Statistic text='average' value={average.toFixed(2)} />
            <Statistic text='positive' value={positiveFeedback.toFixed(2) + '%'} />
          </tbody>
        </table>
      ) : (
          <p>No feedback yet</p>
        )}
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good => good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral => neutral + 1)
  }

  const handleBad = () => {
    setBad(bad => bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} preference='good' />
      <Button onClick={handleNeutral} preference='neutral' />
      <Button onClick={handleBad} preference='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)