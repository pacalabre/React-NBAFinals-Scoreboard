// Next Steps:
// Add mockup of chat functionality with props
// add in state to chat
// look into promise diaplaying on screen bug

var GAME = [
	{
		id: 1,
		gameNum: "Game 1",
		gameDay: "June 1",
		homeTeamName: "GSW",
		homeTeamScore: 113,
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: 91,
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 1"
	},
	{
		id: 2,
		gameNum: "Game 2",
		gameDay: "June 4",
		homeTeamName: "GSW",
		homeTeamScore: 132,
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: 113,
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 2"
	},
	{
		id: 3,
		gameNum: "Game 3",
		gameDay: "June 7",
		homeTeamName: "GSW",
		homeTeamScore: 118,
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: 113,
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 3"
	},
	{
		id: 4,
		gameNum: "Game 4",
		gameDay: "June 9",
		homeTeamName: "GSW",
		homeTeamScore: 116,
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: 137,
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 1 Games GSW 3"
	},
	{
		id: 5,
		gameNum: "Game 5",
		gameDay: "June 9",
		homeTeamName: "GSW",
		homeTeamScore: 129,
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: 120,
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 1 Games GSW 4"
	},
]

var CHAT = [
	{
		id: 1,
		message: "This is a close game"
	},
]
var nextChatId = 2;
var cleGamesWon = 0;
var gswGamesWon = 0;

function Gametime(props) {
	return (
		<section>
			<h3 className="game-number">{props.game}</h3>
			<h4 className="game-date">{props.gameday}</h4>
		</section>
	)
}

Gametime.propTypes = {
	game: React.PropTypes.string.isRequired,
	gameday: React.PropTypes.string.isRequired
}


function Score(props) {
	return (
		<section>
			<button className="change-score" onClick={ function(){props.onScoreChange(+1)} } >+</button>
			<h4 className="score">{props.scoreboard}</h4>
			<button className="change-score" onClick={ function(){props.onScoreChange(-1)} }>-</button>
		</section>
	)
}

Score.propTypes = {
	scoreboard: React.PropTypes.number.isRequired,
	onScoreChange: React.PropTypes.func.isRequired
}


function TeamScoreBoard(props) {
	return (
		<section className="section-cle">
			<img className="team-logo" src={props.img}  />
			<section className="section-cle-score">
				<h2 className="section-h2">{props.team}</h2>
				<Score scoreboard={props.score} onScoreChange={ props.scoreChangeToStateProp } />
			</section>
		</section>
	)
}

TeamScoreBoard.proptypes = {
	img: React.PropTypes.string.isRequired,
	team: React.PropTypes.string.isRequired,
	score: React.PropTypes.string.isRequired,
	scoreChangeToStateProp: React.PropTypes.func.isRequired
}

function SeriesScore(props) {
	return (
		<section>
			<h2 className="series-score">{props.timeleft}</h2>
			<h5 className="series-score">{props.seriesScore}</h5>
		</section>
	)
}

SeriesScore.proptypes = {
	timeleft: React.PropTypes.string.isRequired,
	seriesScore: React.PropTypes.string.isRequired
}


function ChatBox(props) {
	return (
		<section>
			<div className="chat-window">
				<h5 className="screen-name">{props.screenName}</h5>
				<h5 className="screen-name">{function(){props.screenNameChatbox}}</h5>
				<h5 className="message">{props.message}</h5>
			</div>
		</section>
		)
}

ChatBox.proptypes = {
	message: React.PropTypes.string.isRequired
}

var ChatInput = React.createClass ({
	PropTypes : {
		message: React.PropTypes.string.isRequired
	},

	onChangeMessage: function(e) {
		console.log(e, e.target.value);
		this.setState({message: e.target.value})
	},

	onSubmitForm: function(e) {
		e.preventDefault();
		this.props.onAdd(this.state.message);
		this.setState({message: ""})
	},

	getInitialState :  function() {
		return {
			message : this.props.message,
		}
	},

	render: function (){
		return (
			<section>
				<ChatBox screenName="You:" message="Good call on trading Rondo" />
				<form onSubmit={ this.onSubmitForm } className="chat-input-section">
		 			<label className="chat-label message">Message</label>
		 			<textarea className="chat-textarea" type="text" value={this.state.message} onChange = {this.onChangeMessage} />
	 	 			<input type="submit" value="Submit" />	
	 	 		</form>
			</section>
		)
	}
})


ChatInput.proptypes = {
	newMessage: React.PropTypes.string.isRequired
}

var Application = React.createClass ({
	propTypes : {
		initialGameStats: React.PropTypes.arrayOf(React.PropTypes.shape({
			gameNum: React.PropTypes.string.isRequired,
			gameDay: React.PropTypes.string.isRequired,
			homeTeamName: React.PropTypes.string.isRequired,
			homeTeamScore: React.PropTypes.number.isRequired,
			homeTeamLogo: React.PropTypes.string.isRequired,
			awayTeamName: React.PropTypes.string.isRequired,
			awayTeamScore: React.PropTypes.number.isRequired,
			awayTeamLogo: React.PropTypes.string.isRequired,
			seriesScore: React.PropTypes.string.isRequired,
		})).isRequired,
	},

	getInitialState :  function() {
		return {
			gameStats : this.props.initialGameStats,
			chat : this.props.chat
		}
	},

	changeStateOfHomeScoreFunc: function(amountToChange, index) {
		console.log("amount to change = " + amountToChange +" index = " + index );
		this.state.gameStats[index].homeTeamScore += amountToChange;
		this.setState(this.state);

	},
	changeStateOfAwayScoreFunc: function(amountToChange, index) {
		console.log("amount to change = " + amountToChange +" index = " + index );
		this.state.gameStats[index].awayTeamScore += amountToChange;
		this.setState(this.state);

	},

	compareScoresFunc: function(index) {
		var gswScore = this.state.gameStats[index].homeTeamScore;
		var cleScore = this.state.gameStats[index].awayTeamScore;
		var whatsTheSeriesScore;
		var seriesScoreToString;

		if( gswScore > cleScore) {
			gswGamesWon++;
		} else if (cleScore > gswScore) {
			cleGamesWon++
		} else {
			console.log("A game is tied");
		}

		whatsTheSeriesScore = "CLE " + cleGamesWon +" Games" + " GSW "+ gswGamesWon;
		seriesScoreToString = whatsTheSeriesScore.toString();
		this.whoWonGame(whatsTheSeriesScore, index)
	},

	whoWonGame: function(string, index) {			
			this.state.gameStats[index].seriesScore = string;
	},

	resetSeries: function() {
		cleGamesWon = 0;
		gswGamesWon = 0;
	},

	onMessageAdd: function(message) {
		this.state.chat.push({
			message: message,
			id: nextChatId
		})
		this.setState(this.state);
		nextChatId++;
	},

	

	render: function() {
		return (
			<section>
				{this.state.gameStats.map(function(gameParam, index){
					return (
						<section className="app-section" key={gameParam.id}>
							<Gametime game={gameParam.gameNum} gameday={gameParam.gameDay} />
						 	<TeamScoreBoard 
						 		team={gameParam.homeTeamName} 
						 		score={gameParam.homeTeamScore} 
						 		img={gameParam.homeTeamLogo} 
						 		scoreChangeToStateProp={ function(passPropToFunc){this.changeStateOfHomeScoreFunc(passPropToFunc, index)}.bind(this) }
						 	/>
						 	<TeamScoreBoard 
						 		team={gameParam.awayTeamName} 
						 		score={gameParam.awayTeamScore} 
						 		img={gameParam.awayTeamLogo}
						 		scoreChangeToStateProp={function(passPropToFunc){this.changeStateOfAwayScoreFunc(passPropToFunc, index)}.bind(this) } 
						 	/>
						 	<SeriesScore timeleft="FINAL" compareScoresParam={this.compareScoresFunc(index)} seriesScore={gameParam.seriesScore} />
						 </section>
					)
				}.bind(this))}.then(function(){
					this.resetSeries()
				}
				<ChatInput onAdd={this.onMessageAdd}  />
			</section>
		)
		
	}
})


ReactDOM.render(<Application chat={ CHAT }  initialGameStats={ GAME } />, document.getElementById('container'));

