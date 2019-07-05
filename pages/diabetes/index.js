import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import List from './List';
class Index extends React.Component{

    static async getInitialProps({ req }) {
        const {data} = await axios.get('https://api.github.com/repos/zeit/next.js');
        return {stars:data.stargazers_count}
    }
    render() {

        return (
            <div>
                {this.props.stars}
                <List/>
            </div>
        );
    }
}
export default connect(state=>state.diabetes)(Index);