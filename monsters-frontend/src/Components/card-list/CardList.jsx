import React from "react";
import "./cardList.css";
import MonsterCard from "../monster-card/MonsterCard";
const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monsters.map((monster) => {
				return <MonsterCard key={monster.id} monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
