import React, {CSSProperties} from 'react';
import './Feed.css'
import Linkify from 'react-linkify';
const nl2br = require('react-nl2br');

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
        items: [] as Item[],
        loading: true,
        error: false
    }

    componentDidMount () {
        // this.setState({
        //     items: [
        //         {num: "099", title: 'Lorem ipsum one two three Lorem ipsum one two three', link: 'http://ya.ru/'},
        //         {num: "101", title: ' ipsum one two three Lorem ipsum one two three Lorem', link: 'http://ya.ru/'},
        //         ],
        //     loading: false,
        // })
        fetch( 'https://api.znprod.io/api/feed')
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
                            <a href={item.link} className="label"><span className="title-num">#{item.num} </span>{item.title}</a>
                        </div>
                        <div className="num">{item.num}</div>
                        <div className="item-content"><Linkify>{nl2br(item.content)}</Linkify></div>
                    </div>
                })
                }
                {error && <div>Error loading feed</div>}
            </div>
        );
    }
}

export default Feed;