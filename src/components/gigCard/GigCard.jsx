// import React from "react";
// import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';

// function GigCard(props) {
//     GigCard.propTypes = {
//         GigCard: PropTypes.shape({
//             img: PropTypes.string,
//             desc: PropTypes.string,
//             pp: PropTypes.string,
//             username: PropTypes.string,
//             price: PropTypes.number,
//             price: PropTypes.number
//         })
//     };
    
//     return (
//     <Link to ="/gig/123" className="link">
//         <div className="gigCard">
//            <img src={props.img} alt=""></img>
//            <div className="info">
//             <div className="user">
//                 <img src={props.pp} alt=""></img>
//                 <span>{props.username}</span>
//             </div>
//             <p>{props.desc}</p>
//             <div className="star">
//                 <img src="./img/star.png" alt=""></img>
//                 <span>{props.star}</span>
//             </div>
//            </div>
//            <hr/>
//            <div className="details">
//                 <img src="./img/heart.png" alt="" />
//                 <div className="price">
//                     <span>STARTING AT</span>
//                     <h2>${props.price}</h2>
//                 </div>
//            </div>  
//         </div>
//     </Link>
//     )
// }

// export default GigCard;