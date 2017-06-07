function Gametime(props) {
	return (
		<section>
			<h3 className="game-number">{props.game}</h3>
			<h4 className="game-date">{props.gameday}</h4>
		</section>
	)
}

function CavsScore(props) {
	return (
		<section className="section-cle">
			<img className="team-logo" src="./images/cavs.png" />
			<section className="section-cle-score">
				<h2 className="section-h2">{props.team}</h2>
				<h4 className="score">{props.score}</h4>
			</section>
		</section>
	)
}

function GSWScore(props) {
	return (
		<section className="section-gsw">
			<img className="team-logo" src="./images/gsw.png" />
			<section  className="section-gsw-score">
				<h2 className="section-h2">{ props.team }</h2>
				<h4 className="score">{ props.score }</h4>
			</section>
		</section>
	)
}

function SeriesScore(props) {
	return (
		<section>
			<h2 className="series-score">{props.timeleft}</h2>
			<h5 className="series-score">{props.seriesScore}</h5>
		</section>
	)
}


function Application() {
	return (
		<main className="app-section">
			<Gametime game="Game 1" gameday="Thursday, June 1" />
			<CavsScore team="Cavs" score="91" />
			<GSWScore team="GSW" score="113" />
			<SeriesScore timeleft="FINAL" seriesScore="CLE 0 Games GSW 1" />
		</main>
		)
}

ReactDOM.render(<Application />, document.getElementById('container'));