import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { loadPages } from '../reducers/pages'
//components
import Sidebar from './Sidebar';

class Auditions extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 't',
      showInfo: 's',
      roles: 'ro',
      rehersal: 're',
      auditionDetails: 'a'
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  convertHeaders(header) {
    return header.split("_")
    .map(word => word[0].toUpperCase() + word.slice(1)) 
    .join(" ")
  }

  handleScroll(){
    console.log('SCROLLIN!!')
    this.refs.sidebar.findDOMNode().style.pane = document.documentElement.scrollTop + 'px';

  }

  componentDidMount() {
    console.log('componentDidMount invoked');
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount invoked');
    document.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    //console.log('aud props: ', this.props.page.acf)
    return(
      <div>
                
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>
        
       <div className="clearfix mx3">
          <div className="col col-8">
            <h2>Upcoming Auditions</h2>
            <div>
              {this.props.pages && 
                Object.keys(this.props.page.acf).map((header, i) => {
                  console.log(header)
                  if(header[0] !== "_") {
                    return (
                      <div key={i}>
                        <h2>{this.convertHeaders(header)}</h2>
                        <div key={header} dangerouslySetInnerHTML={{ __html: this.props.page.acf[header] }} />
                      </div>
                    )}
                  }
                )}
            </div>
          </div>

          <div className="col col-4 center">
            <div ref="sidebar" onScroll={this.handleScroll}>
              <Sidebar listItems={this.props.page.acf}/>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}
const mapStateToProps = ({ pages }) => ({ pages });

const mapDispatchToProps = {
  loadPages
};

const mapStateToProps = ({pages}) => {
  return({ pages })
}

const mapDispatchToProps = { loadPages }

export default connect(mapStateToProps, mapDispatchToProps)(Auditions);

