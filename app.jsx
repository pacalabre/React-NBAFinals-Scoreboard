function Application() {
	return (
		<main className="app-section">
			<h3 className="game-number">Game 1</h3>
			<h4 className="game-date">Thursday, June 1</h4>
			<section className="section-cle">
				<img className="team-logo" src="./images/cavs.png" />
				<section className="section-cle-score">
					<h2 className="section-h2">CLE</h2>
					<h4 className="score">91</h4>
				</section>
			</section>
			<section className="section-gsw">
				<img className="team-logo" src="./images/gsw.png" />
				<section  className="section-gsw-score">
					<h2 className="section-h2">GSW</h2>
					<h4 className="score">113</h4>
				</section>
			</section>
			<h2 className="series-score">FINAL</h2>
			<h5 className="series-score">CLE 0 Games GSW 1</h5>
		</main>
		)
}

ReactDOM.render(<Application />, document.getElementById('container'));