import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'
import Home from './Home'
import GetApi from './GetApi'
import Footer from './Footer'
import Slider from './Slider'
import './index.css'
import './main.css'
import './style.css'
import './responsive.css'
import './fonts.css'


ReactDOM.render(<Header/>, document.getElementById('Header'))
ReactDOM.render(<GetApi/>, document.getElementById('GetApi'))
ReactDOM.render(<Home/>, document.getElementById('Home'))
// ReactDOM.render(<Slider/>, document.getElementById('Slider'))
ReactDOM.render(<Footer/>, document.getElementById('Footer'))