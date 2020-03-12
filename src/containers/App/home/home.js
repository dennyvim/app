import React from 'react'; 
import './assets/home.css'
import Footer from '../../../components/footer/footer.js';
import Header from '../../../components/header/header.js';
import { Link } from 'react-router-dom';
import Splash from '../../../components/splash/splash';
import HomeClassic from './homeClassic';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }

    componentDidMount(){
        setTimeout( () => {
            this.setTimePassed();
        }, 5000);
    }

    setTimePassed() {
        this.setState({timePassed: true});
    }

    render(){
        if(!this.state.timePassed){
            return <Splash/>
        }
        else{
            return(
                <HomeClassic/>
            );
        }

    }
}

export default Home;