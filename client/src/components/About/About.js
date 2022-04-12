import PropTypes from "prop-types";
import React, { Component } from "react";
import SEO from "./components/SEO";
import { openSource } from "./Info";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/argon-design-system-react.css";
import "./styles/styles.css";
import "./styles/vendor/font-awesome/css/font-awesome.min.css";
import "./styles/vendor/nucleo/css/nucleo.css";
const Navigation = ("components/Navigation");
const Greetings = ("containers/Greetings");
const Skills = ("containers/Skills");
const Proficiency = ("containers/Proficiency");
const Education = ("containers/Education");
const Experience = ("containers/Experience");
const Projects = ("containers/Projects");
const Feedbacks = ("containers/Feedbacks");
const GithubProfileCard = 
	import("./components/GithubProfileCard"
);


export default function AboutMe({ githubProfileData }) {

		return (
		<div>
			<SEO
				data={{
					title: "Jano Roze",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://developer-portfolio-Jroze88.vercel.app",
					keywords: [
						"Jano",
						"Jano Roze",
						"@Jroze88",
						"Jroze88",
						"Portfolio",
						"Jano Portfolio ",
						"Jano Roze Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
						"react-native"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
		</div>
	);}


// AboutMe.prototype = {
// 	githubProfileData: PropTypes.object.isRequired,
// };

// export async function getStaticProps(_) {
// 	const githubProfileData = await fetch(
// 		`https://api.github.com/users/Jroze88`
// 	).then((res) => res.json());

// 	return {
// 		props: { githubProfileData },
// 	};
// }
