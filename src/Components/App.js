import React, { Component } from 'react';
import SetPlayersNb from './SetPlayersNb';
import PlayerData from './PlayerData';
import EditFn from './EditFn';
import BtnEndTurn from './BtnEndTurn';
import AddUser from './svg/AddUser';
import '../CSS/App.css';


class App extends Component {
    
    state = {
        players: [],
        playersNumber: "",
        isStarted: false
    };

    setPlayer = (nb) => {
        const players = [...this.state.players];
        for (let i = 0; i < nb; i++){
            players.push({name:`player ${i+1} name`, score:[]})
        }
        this.setState({players: players, playersNumber: nb});
    };

    updatePlayerName = (name, key) => {
        const players = [...this.state.players];
        players[key].name = name;
        this.setState({players: players});
    }
    deletePlayer = (id) => {
        const players = [...this.state.players];
        players.splice(id, 1);
        const playersNumber = players.length;
        this.setState({players: players, playersNumber: playersNumber});
    }
    addPlayer = () => {
        const players = [...this.state.players];
        if(players.length>0){
            players.push({name:`player ${players.length +1} name`, score:[]})
        }
        const playersNumber = players.length;
        this.setState({players: players, playersNumber: playersNumber});
    }
    displayScorePerTurn = (id, score) => {
        const players = [...this.state.players];
        players[id].score.push(score);
        this.setState({players: players});
    }
    
    showScores = () => {
        const scores = document.querySelectorAll('.score');
        console.log(scores);
        const scoresArray = Array.from(scores);
        scoresArray.map(el=>el.style.display="flex");
        //scores.style.display = "block";
    }
    hidePlayersEditBtns = () => {
        const btnDelete = document.querySelectorAll('.btn-delete');
        const btnDeleteArray = Array.from(btnDelete);
        const buttonAddPlayer = document.querySelector('.btn-add-player');
        buttonAddPlayer.style.display='none';
        btnDeleteArray.map(el=>el.style.display="none");
    }
    orderPlayerByScore = () => {
        const players = this.state.players;
        const mapped = players.map(function(e, i) {
            return { index: i, value: e.score.reduce((a, b) => a + b, 0)};
        });
        mapped.sort(function(a, b) {
            if (a.value > b.value) {
              return 1;
            }
            if (a.value < b.value) {
              return -1;
            }
            return 0;
        });
        const result = mapped.map(function(e){
            return players[e.index];
        });
        this.setState({players: result});
    }
    changeStructurePlayer = () => {
        const players = document.querySelectorAll('.player');
        const playersArr = Array.from(players);
        playersArr.map(el=> el.classList.remove('player-edit'));
    }

    startGame = () => {
        this.showScores();
        this.hidePlayersEditBtns();
        this.changeStructurePlayer();       
        console.log("start game");
        this.setState({isStarted: !this.state.isStarted});
    }

    resetGame = () => {
        console.log('reset');
        const toggleHeader = document.querySelector('.toggleHeader');
        toggleHeader.click();
        this.setState({isStarted: !this.state.isStarted, players: {}, playersNumber:""});
    }

    render() {
        const isStarted = this.state.isStarted;
        const buttonStart=  <div className="btn-start-content"><button className="btn btn-start" onClick={this.startGame}>Start game</button></div>;
        
        return (
        <div className="wrapper">
            <div className="container">
                <div className="header">
                    <EditFn>{(isInEditMode, setEditMode)=><SetPlayersNb setPlayer={this.setPlayer} isInEditMode={isInEditMode} setEditMode={setEditMode} getInputScores={this.getInputScores}/>}</EditFn>
                </div>
                <div className="list">
                    <div className="list__inner">
                    {Object.keys(this.state.players).map(key=>
                        <EditFn key={key}>{(isInEditMode, setEditMode) => <PlayerData index={key} key={key} players={this.state.players[key]} updatePlayerName={this.updatePlayerName} deletePlayer={this.deletePlayer} isInEditMode={isInEditMode} setEditMode={setEditMode} isDisabled={this.state.isDisabled} displayScorePerTurn={this.displayScorePerTurn}/>}</EditFn>        
                    )}   
                    </div>
                    <button className="btn btn-add-player" onClick={this.addPlayer}>Add Player <AddUser /></button>
                </div>
                {(isStarted === false)?buttonStart:<BtnEndTurn resetGame={this.resetGame} orderPlayerByScore={this.orderPlayerByScore}/>}
                
            </div>
            
        </div>
        );
    }

}
 
export default App;