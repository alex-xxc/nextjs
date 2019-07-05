import {Menu,Icon} from 'antd';
import {withRouter} from 'next/router';
import Link from 'next/link';
import React from 'react';
class Hmenu extends React.Component{
    render() {
        let {id,mode,pathname}=this.props;
        return (
            <Menu className="header-nav" id={id} mode={mode} selectedKeys={[pathname]}>
                <Menu.Item key="index">
                    <Link href="/index"><a><Icon type="home"/>首页</a></Link>
                </Menu.Item>
                <Menu.Item key="diabetes">
                    <Link href="/diabetes"><a><Icon type="book"/>糖尿病知识查询</a></Link>
                </Menu.Item>
                <Menu.Item key="person">
                    <Link href="/person"><a><Icon type="profile"/>患者信息查询</a></Link>
                </Menu.Item>
                <Menu.Item key="graph">
                    <Link href="/graph"><a><Icon type="info-circle"/>数据可视化</a></Link>
                </Menu.Item>
            </Menu>
        );
    }

};
export default withRouter(({children,router,href},props)=>{
    let {mode,id} = props;
    let pathname = router.pathname.split('/')[1] || 'index';
    return <Hmenu mode={mode} id={id} pathname={pathname}/>;
});