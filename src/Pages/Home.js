import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import CardOne from '../Component/CardOne'
import HomeCard from '../Component/HomeCard'
import CardTwo from '../Component/CardTwo'
// import { store } from './Detail'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url ="https://blogprojectbackend.herokuapp.com/api/blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
      }, [])
    // const [detail] = useContext(store);
    return (

        <div className='Home'>

            <div className="home__container">
                <div className="home__first">
                    <h1>Nature</h1>
                </div>
                <div className="home__sec">
                    <Link to="/fitness" > <img src="https://media.istockphoto.com/photos/forest-road-under-sunset-sunbeams-picture-id611620980?k=20&m=611620980&s=612x612&w=0&h=mNbMRsXhx6lOvRubKQwJtJtvHXEtRYUX2_2mTWp_pAg=" alt="not foun" /></Link>

                </div>
                <div className="home__thir">
                    <h4>Beautiful secene</h4>
                    <Link to='/technology'>   <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="not found" /></Link>
                </div>
            </div>


            <h1 style={{ marginTop: "20px" }}>The Latest</h1>
            <hr style={{ width: "200px", thickness: "20px" }} />
            <div className='home__left left1'>
                {
                    // detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "bollywood" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>
            <div className='home__left left1'>
                {
                    // detail.filter((article) => { return article.category === "technology" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "technology" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>
            <div className='home__left left1'>
                {
                    // detail.filter((article) => { return article.category === "food" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))
                    data.filter((article) => { return article.category === "food" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div><div>
            <h1 style={{ marginTop: "10px" ,display:"inline-block",marginBottom:"10px"}}>Latest Articles</h1>
            <hr style={{ width: "200px", thickness: "20px" }} /></div>

            <h1 className='Top'style={{ marginTop: "-72px",marginBottom:"10px" ,display:"inline-block"}} >Top Posts</h1>

            {/* <h1 style={{ marginTop: "20px" }}>The Latest</h1>
            <hr style={{ width: "200px", thickness: "20px" }} /> */}


            <div className='rightbar2'>
                {
                    // detail.filter((article) => { return article.category === "mix" }).map((n) => (
                    //     <CardOne
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "mix" }).map((res) => (
                        <CardOne
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>
            <div className="sidebar2">
                {
                    // detail.filter((article) => { return article.category === "mix" }).map((n) => (
                    //     <CardTwo
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         description={n.description.slice(0, 200)}
                    //         title={n.title.slice(0, 25)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "mix" }).map((res) => (
                        <CardTwo
                            articleid={res.id}
                            imgUrl={res.Image}
                            description={res.description.slice(0, 200)}
                            title={res.title.slice(0, 25)}
                            author={res.author}
                        />
                    ))
                }

                <div className='advertisement'>
                    <p>Advertisement</p>
                </div>
            </div>
            <h1 style={{ marginTop: "10px", display: "inline-block" }}>Latest Stories</h1>
            <hr />

            <div className='home__left'>
                {
                    // detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "footer1" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>

            <div className='home__left'>
                {
                    // detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "footer2" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>

            <div className='home__left'>
                {
                    // detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                    //     <HomeCard
                    //         articleid={n.id}
                    //         imgUrl={n.Image}
                    //         title={n.title}
                    //         description={n.description.slice(0, 200)}
                    //         author={n.author}
                    //     />
                    // ))

                    data.filter((article) => { return article.category === "footer3" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>

        </div>


    )
}

export default Home
