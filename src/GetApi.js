import React, { Component } from 'react'


class GetApi extends Component{
	constructor(props) {
		super(props)
		this.state = {
			projects: []
		}
	}
	componentDidMount(){
		let projectsURL = "http://straightline.ssdev/wp-json/wp/v2/service?per_page=100"
		fetch(projectsURL)
		.then(response => response.json() )
		.then(response => {
			this.setState({
				projects: response
			})
		})
	}
	render(){
		let projects = this.state.projects.map( (project, index) => {
			return(
				<>
					{/* <h2>{project.acf.banner_title}</h2> */}
					<h3>{project.title.rendered}</h3>
					
				</>
				
			)
		})
		console.log(projects);
		return(
			<div className="just_demo">
				<h1>Projects</h1>
				{projects}
				
			</div>
		)
	}
}

export default GetApi

