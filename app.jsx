/* 
Next Steps:
 - Add in state
 - Get the inital state from the props
 - Add in a button to each team to add and remove points from the scoreboards
*/

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

function TeamScoreBoard(props) {
	return (
		<section className="section-cle">
			<img className="team-logo" src={props.img}  />
			<section className="section-cle-score">
				<h2 className="section-h2">{props.team}</h2>
				<h4 className="score">{props.score}</h4>
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

function Application(props) {
	return (
		<div>
			{props.gameApp.map(function(gameParam){
				return (
					<main className="app-section" key={gameParam.id}>
						<Gametime game={gameParam.gameNum} gameday={gameParam.gameDay} />
					 	<TeamScoreBoard team={gameParam.homeTeamName} score={gameParam.homeTeamScore} img={gameParam.homeTeamLogo} />
					 	<TeamScoreBoard team={gameParam.awayTeamName} score={gameParam.awayTeamScore} img={gameParam.awayTeamLogo} />
					 	<SeriesScore timeleft="FINAL" seriesScore={gameParam.seriesScore} />
					 </main>
				)
			})}
		</div>
	)
}

Application.propTypes = {
	gameApp: React.PropTypes.arrayOf(React.PropTypes.shape({
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
}



ReactDOM.render(<Application gameApp={ GAME } />, document.getElementById('container'));

