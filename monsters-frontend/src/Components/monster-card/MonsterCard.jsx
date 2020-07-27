import React from "react";
import "./monsterCard.css";
function MonsterCard(props) {
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${props.monster.id}?size=180x180`}
				alt="img-monster"
			/>

			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
}

export default MonsterCard;
