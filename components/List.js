import React from 'react';
import axios from 'axios';

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            stars:''
        }
    }
    componentDidMount(){
        axios.get('https://api.github.com/repos/zeit/next.js').then((res)=>{
            var stars = res.data.stargazers_count;
            this.setState({
                stars:stars
            })
        });

    }
    render() {
        return (
            <div>
                列表
                {this.state.stars};
            </div>
        );
    }
}
export default List;