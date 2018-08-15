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
				<div className="missionContainer">
					<div className="missionTitle">
						<h1>MISSION</h1>
						<hr className="titleBreak" />
					</div>
					<div className="missionText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Maecenas sit amet dui vitae turpis porta porttitor. Cras 
						lobortis dapibus dictum. Ut non dolor nulla. Nullam in felis 
						vitae augue congue luctus vitae at nisi. Donec nec venenatis 
						mi, id vestibulum enim. Aenean tempor arcu dolor, eget ultrices
						 ipsum tempus et. Proin mollis mi eget turpis eleifend 
						 condimentum. Donec commodo consequat eros id laoreet. Duis et
						  leo semper, porta diam ut, mattis nisi. Duis eu lacus mauris.
						   Integer sit amet tellus metus. Duis est mauris, auctor a 
						   aliquam ac, ullamcorper vel nisl.</p>
						<p>Orci varius natoque penatibus et magnis dis parturient 
						montes, nascetur ridiculus mus. Sed commodo lacus ac neque 
						sagittis, non efficitur dolor luctus. Aliquam pulvinar semper 
						scelerisque. Aenean ut ligula at odio mattis sagittis. Duis 
						iaculis neque non libero pulvinar aliquet. Donec eget sodales 
						leo, quis iaculis est. Nulla id leo quis turpis laoreet 
						consectetur. Nulla rhoncus fringilla dui non porttitor. Etiam 
						quis nulla mollis, consequat leo et, hendrerit ligula. Vivamus 
						posuere eleifend pretium. Vestibulum pulvinar enim nisi, in 
						porttitor nisi maximus eu. Mauris porta lectus a neque egestas,
						 id eleifend nisi cursus.</p>
						<p>Vivamus sed elit varius, elementum nulla eu, aliquet velit.
						 Nunc venenatis a lorem in ultrices. Cras quis lacus risus.
						  Quisque malesuada justo ut nisl volutpat, ut rutrum augue 
						  malesuada. Sed condimentum orci non odio condimentum 
						  convallis. Ut eget lectus id enim iaculis tristique. Morbi 
						  in justo mauris. Interdum et malesuada fames ac ante ipsum 
						  primis in faucibus. Nulla suscipit tellus a erat mattis 
						  mollis. Suspendisse quis scelerisque augue. In non pretium
						   lacus, quis sodales ipsum. Suspendisse eget volutpat leo.
						    Curabitur malesuada ut turpis ac pretium. Suspendisse 
						    vitae mi tempor magna tempus imperdiet. Integer blandit
						     elit tortor, et facilisis sem mollis quis.</p>
					</div>
				</div>
				<div className="statsContainer">
					<div className="statsTitle">
						<h1>STATISTICS</h1>
						<hr className="titleBreak"/>
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