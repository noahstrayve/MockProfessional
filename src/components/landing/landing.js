import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";

const HomePage = props => {
	return <div className="landingPage">
				<div className="landingMainImage">
					<div className="welcomeMessageBox">
						<div className="welcomeMessageHeadline">
							<h3>PLZ HALP</h3>
						</div>
						<div className="welcomeMessageSubtext">
							<p>We need money to help poor people</p>
						</div>
					</div>
				</div>
				<div className="">
					<div className="">
					</div>
				</div>
				<div className="statsContainer">
					<div className="statsTitle">
						<h1>STATISTICS</h1>
						<hr className="statTitleBreak"/>
					</div>
					<div className="statLayer">
						<div className="statSideOne">
							<h1>25</h1>
						</div>
						<div className="statSideTwo">
							<div className="statHeadline">
								<h2>Alarming Text</h2>
							</div>
							<div className="statSubtext">
								<p>Shoopity Poop Scoopty Poopty Scoopdy Whoop</p>
							</div>
						</div>
					</div>
					<div className="statLayer">
						<div className="statSideOne">
							<div className="statHeadline">
								<h2>Alarming Text</h2>
							</div>
							<div className="statSubtext">
								<p>Shoopity Poop Scoopty Poopty Scoopdy Whoop</p>
							</div>
						</div>
						<div className="statSideTwo">
							<h1>25</h1>
						</div>
					</div>
					<div className="statLayer">
						<div className="statSideOne">
							<h1>25</h1>
						</div>
						<div className="statSideTwo">
							<div className="statHeadline">
								<h2>Alarming Text</h2>
							</div>
							<div className="statSubtext">
								<p>Shoopity Poop Scoopty Poopty Scoopdy Whoop</p>
							</div>
						</div>
					</div>
				</div>
			</div>;
}

export default HomePage;