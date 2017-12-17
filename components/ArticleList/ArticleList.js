import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames/bind';
import actions from '../Actions/ArticleActions';

export default class ArticleList extends Component{

    componentWillMount(){
        console.log('componentWill be Mounted');
    }

    componentDidMount(){
        console.log('Component Mounted');
        this.props.actions.getArticlesList();
    }

    render(){
        const i = 0;
        return <section>
                    I will give you list of
                </section>
    }
}

//
// const mapStateToProps = store => ({
//     articles: articles,
// });
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(actions, dispatch),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
