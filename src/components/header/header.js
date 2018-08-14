import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Headline = props => {
	return <div className="headerContainer">
				<div className="companyHolder">
					<h1>Company Name</h1>
				</div>
				<div className="routesHolder">
					<Link to="/"><div className="routerBoxes boxOne">
						<div className="routeText">
							<p id="textExp">Home</p>
						</div>
					</div></Link>
					<Link to="/mission"><div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Mission</p>
						</div>
					</div></Link>
					<Link to="/regions"><div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Regions</p>
						</div>
					</div></Link>
					<Link to="/team"><div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Team</p>
						</div>
					</div></Link>
					<Link to="/contact"><div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Contact</p>
						</div>
					</div></Link>
				</div>
			</div>;
}

export default Headline;