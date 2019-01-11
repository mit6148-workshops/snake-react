import React from 'react'

export default class GameOver extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={"game-over-modal"}>
        Game Over!
      </div>
    )
  }

}