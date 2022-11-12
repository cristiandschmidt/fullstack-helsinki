import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td> 
  </tr>
)

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad
  let average = (props.good*(1) + props.neutral*0 + props.bad*(-1))/total
  let positive = (props.good*100)/total
  if( total === 0 ){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text = 'Good' value = {props.good} />
        <Statistic text = 'Neutral' value = {props.neutral} />
        <Statistic text = 'Bad' value = {props.bad} />
        <Statistic text = 'All' value = {total} />
        <Statistic text = 'Average' value = {average} />
        <Statistic text = 'Positive' value = {`${positive}%`}/>
      </tbody>
    </table> 
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        handleClick = {() => setGood(good + 1)}
        text = 'good'
      />
      <Button
        handleClick = {() => setNeutral(neutral + 1)}
        text = 'neutral'
      />
      <Button
        handleClick = {() => setBad(bad + 1)}
        text = 'bad'
      />
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)