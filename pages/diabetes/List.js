import React from 'react';
import axios from 'axios';

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            stars:''
        }
    }
    static async getInitialProps({ req }) {
        const {data} = await axios.get('https://api.github.com/repos/zeit/next.js');
        return {stars:data.stargazers_count}
    }
    render() {
        return (
            <div>
                列表
                {console.log(this)}
                {this.props.stars}
            </div>
        );
    }
}
export default List;