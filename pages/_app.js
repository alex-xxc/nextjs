import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static/css/index.less';
class Layout extends React.Component {
    render () {
        const {children} = this.props
        return <div className='layout'>
            <Header/>
            {children}
            <Footer/>
        </div>
    }
}
class MyApp extends App {
    render () {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)