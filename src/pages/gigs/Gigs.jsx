import React, {useState} from "react";
import {gigs} from "../../data"
import { Link } from "react-router-dom";


function Gigs() {
    const [open ,setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    function reSort(type) {
        setSort(type);
        setOpen(false);
    }
    
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">Liverr {'>'} Graphics & Design {'>'}</span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Liverr`s AI artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./img/down.png" alt="" onClick={()=> setOpen(!open)}/>
                        {open && <div className="rightMenu">
                            {sort === "sales" ? <span onClick={()=> reSort("createdAt")}>Newest</span>
                            :<span onClick={()=> reSort("sales")}>Best Selling</span>}
                        </div>
                        }
                    </div>
                </div>
                <div className="cards">
                    {gigs.map(gig=>(
                        <Link to ="/gig/123" className="link" key={gig.id}>
                            <div className="gigCard" key={gig.id}>
                                <img src={gig.img} alt=""></img>
                                <div className="info">
                                    <div className="user">
                                        <img src={gig.pp} alt=""></img>
                                        <span>{gig.username}</span>
                                    </div>
                                    <p>{gig.desc}</p>
                                    <div className="star">
                                        <img src="./img/star.png" alt=""></img>
                                        <span>{gig.star}</span>
                                    </div>
                                </div>
                                <hr/>
                                <div className="details">
                                    <img src="./img/heart.png" alt="" />
                                    <div className="price">
                                        <span>STARTING AT</span>
                                        <h2>${gig.price}</h2>
                                    </div>
                                </div>  
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gigs;