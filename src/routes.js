import React, { Component } from 'react'
import { connect } from 'react-redux'

const templates = {
	_default: import './App'
}

class Routes extends Component {
	render(){
		const buildRoutes = () => {
			return Object.keys(this.props.pages).map(pageId => {
				const page = this.props.pages[pageId];
				return (
					<Route path={page.slug}
								 key={page.id}
								 component={templates[page.template] || templates._default} /> 
					)
			})
		}

		return (
			{ buildRoutes() }
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		pages: state.pages
	}
}

export default connect(mapStateToProps)(Routes)