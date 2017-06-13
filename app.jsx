var GAME = [
	{
		gameNum: "Game 1",
		gameDay: "June 1",
		homeTeamName: "GSW",
		homeTeamScore: "113",
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: "91",
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 1"
	},
	{
		gameNum: "Game 2",
		gameDay: "June 4",
		homeTeamName: "GSW",
		homeTeamScore: "132",
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: "113",
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 2"
	},
	{
		gameNum: "Game 3",
		gameDay: "June 7",
		homeTeamName: "GSW",
		homeTeamScore: "118",
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: "113",
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 0 Games GSW 3"
	},
	{
		gameNum: "Game 4",
		gameDay: "June 9",
		homeTeamName: "GSW",
		homeTeamScore: "116",
		homeTeamLogo: "./images/gsw.png",
		awayTeamName: "Cavs",
		awayTeamScore: "137",
		awayTeamLogo: "./images/cavs.png",
		seriesScore: "CLE 1 Games GSW 3"
	}

	
]

function Gametime(props) {
	return (
		<section>
			<h3 className="game-number">{props.game}</h3>
			<h4 className="game-date">{props.gameday}</h4>
		</section>
	)
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

// function GSWScore(props) {
// 	return (
// 		<section className="section-gsw">
// 			<img className="team-logo" src="./images/gsw.png" />
// 			<section  className="section-gsw-score">
// 				<h2 className="section-h2">{ props.team }</h2>
// 				<h4 className="score">{ props.score }</h4>
// 			</section>
// 		</section>
// 	)
// }

function SeriesScore(props) {
	return (
		<section>
			<h2 className="series-score">{props.timeleft}</h2>
			<h5 className="series-score">{props.seriesScore}</h5>
		</section>
	)
}


function Application(props) {
	return (
		<div>
			{props.gameApp.map(function(gameParam){
				return (
					<main className="app-section">
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

ReactDOM.render(<Application gameApp={ GAME } />, document.getElementById('container'));

