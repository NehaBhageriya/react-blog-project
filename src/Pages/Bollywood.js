import React, { useContext } from 'react'

import { store } from './Detail'
import CardOne from '../Component/CardOne'
import CardTwo from '../Component/CardTwo';

const Bollywood = () => {
    const [detail, setDetail] = useContext(store);
    console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                            <CardOne
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 400)}
                                category={n.category}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                            <CardTwo
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 35)}
                                category={n.category}

                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Bollywood