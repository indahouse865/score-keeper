import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: "David",
  score: 99
}, {
  _id: '2',
  name: "Liz",
  score: -12
}, {
  _id: '3',
  name: "Eileen",
  score: 10
}];

const renderPlayers = (players) => {

  return players.map((player) => {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  });
}

Meteor.startup(() => {
  let title = 'Score Keeper'
  let name = 'David';
  let jsx = (
    <div>
      {/* render h1 tag with title vat */}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});