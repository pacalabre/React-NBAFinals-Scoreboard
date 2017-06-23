// Next Steps:
// Move the state to the application 
// Have the state bubble up through methods

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
	scoreboard: React.PropTypes.number.isRequired
}


function TeamScoreBoard(props) {
	return (
		<section className="section-cle">
			<img className="team-logo" src={props.img}  />
			<section className="section-cle-score">
				<h2 className="section-h2">{props.team}</h2>
				<Score scoreboard={props.score} onScoreChange={ props.scoreChangeToState } />
			</section>
		</section>
	)
}

TeamScoreBoard.proptypes = {
	img: React.PropTypes.string.isRequired,
	team: React.PropTypes.string.isRequired,
	score: React.PropTypes.string.isRequired
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
		initialGameStats : this.props.initialGameStats
		}
	},

	scoreChangeToState : function(amountToChange, index) {
		console.log("the state changed yo!", amountToChange, index);
	},

	render: function() {
		return (
			<section>
				{this.state.initialGameStats.map(function(gameParam, index){
					return (
						<section className="app-section" key={gameParam.id}>
							<Gametime game={gameParam.gameNum} gameday={gameParam.gameDay} />
						 	<TeamScoreBoard 
						 		team={gameParam.homeTeamName} 
						 		score={gameParam.homeTeamScore} 
						 		img={gameParam.homeTeamLogo} 
						 		scoreChangeToState={ function(passPropToFunc){this.scoreChangeToState(index, passPropToFunc)}.bind(this) }
						 		/>
						 	<TeamScoreBoard 
						 		team={gameParam.awayTeamName} 
						 		score={gameParam.awayTeamScore} 
						 		img={gameParam.awayTeamLogo}
						 		scoreChangeToState={function(passPropToFunc){this.scoreChangeToState(index, passPropToFunc)}.bind(this) } 
						 		 />
						 	<SeriesScore timeleft="FINAL" seriesScore={gameParam.seriesScore} />
						 </section>
					)
				}.bind(this))}
			</section>
		)
		
	}
})


ReactDOM.render(<Application initialGameStats={ GAME } />, document.getElementById('container'));

