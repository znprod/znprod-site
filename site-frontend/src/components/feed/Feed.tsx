import React, {CSSProperties, useEffect, useState} from 'react';
import './Feed.css'

type Item = {
    num: string;
    title: string;
    content: string;
    link: string;
    image: string;
    duration: string;
}

type State = {
    items: Item[],
    loading: boolean,
    error: boolean,
}

class Feed extends React.Component {

    state:State = {
        items: [],
        loading: true,
        error: false
    }

    componentDidMount () {
        fetch('/api/feed', {mode: 'cors'})
            .then(response => response.json())
            .then(response =>  this.setState({
                items: response,
                loading: false
            }))
            .catch(error => this.setState({
                loading: false,
                error: true
            }));
    }

    render () {
        const { items, loading, error } = this.state;
        return (
            <div className="Feed">
                {loading && <div>Loading...</div>}
                {!loading && !error &&
                items.map(item => {

                    const styles = {
                            backgroundImage: "url('" + item.image + "')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "485px",
                            backgroundPositionY: "40px",
                        } as React.CSSProperties;

                    return <div className="episode" style={styles}>
                        <div className="episode-title" key={item.title}>
                            <a href={item.link} className="label">{item.title}</a>
                        </div>
                        <div className="num">{item.num}</div>
                        <div className="item-content">{item.content.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}</div>
                    </div>
                })
                }
                {error && <div>Error loading feed</div>}
            </div>
        );
    }
}

export default Feed;