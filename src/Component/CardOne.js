import React from 'react'
import { NavLink} from 'react-router-dom';

const CardOne = (props) => {
  const { imgUrl, title, description, articleid ,category} = props;
  return (
    <NavLink state={{ title: title, img: imgUrl, description: description, category:category, id: articleid }} to={`${articleid}`}>
      <div className={articleid}>
        <div className="card__container" >
          <div className='card__image'>
            <img src={imgUrl} alt="data not found" />
          </div>
          <div className='bigcard__data'  >
            <h3>{title}</h3>
            <p>{description}....</p>
            <h3>{category} / </h3>
          </div>
        </div><br/>
        <hr style={{ fontWeigth: "30px"}} />
        <br/>
      </div></NavLink>
  )
}

export default CardOne
