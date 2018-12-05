import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        let playerName = e.target.playerName.value;
  
        e.preventDefault();
      
        if (playerName) {
          e.target.playerName.value = '';
          Players.insert({
            name: playerName,
            score: this.props.score
          });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="playerName" placeholder="Player Name"></input>
                    <button>Add Player</button>
                </form>
            </div>
        );
    }
}