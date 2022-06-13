import React from 'react'
import { Link } from 'react-router-dom'

const CardTwo = (props) => {
  const { imgUrl, title, description, articleid ,category} = props;
  return (
    <Link state={{ title: title, img: imgUrl, description: description,  category:category,id: articleid }} to={`${articleid}`}>
      <div className='card__small' >
        <div className="card__data" >
          <div className="smallCard__image">
            <img src={imgUrl} alt="data not found" />
          </div>
          <div className='small'  >
            <h5>{title}</h5>
            <h5>{category} / </h5>

          </div>
        </div>
      </div></Link>
  )
}

export default CardTwo
