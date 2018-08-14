import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Headline = props => {
	return <div className="headerContainer">
				<div className="companyHolder">
					<h1>Company Name</h1>
				</div>
				<div className="routesHolder">
					<div className="routerBoxes boxOne">
						<div className="routeText">
							<p id="textExp">Option One</p>
						</div>
					</div>
					<div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Option Two</p>
						</div>
					</div>
					<div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Option Three</p>
						</div>
					</div>
					<div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Option Four</p>
						</div>
					</div>
					<div className="routerBoxes">
						<div className="routeText">
							<p id="textExp">Option Five</p>
						</div>
					</div>
				</div>
			</div>;
}

export default Headline;