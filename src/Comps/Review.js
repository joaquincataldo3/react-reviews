import React, { useState } from 'react';
import people from '../data';
import './Review.css'

const Review = () => {

  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0)

  const handleLeftArrowClick = () => {
   
    if (index <= 0) {
      setIndex(people.length - 1)
      setLastIndex(index)
    } else {
      setIndex(index - 1)
      setLastIndex(index)
    }
    
  }

  const handleRightArrowClick = () => {
    if (index < people.length - 1) {
      setIndex(index + 1)
      setLastIndex(index)
    } else {
      setIndex(0)
      setLastIndex(0)
    }
  }

  const handleSurpriseMeBtn = () => {
    let randomIndex;
    randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === lastIndex) { // if we don't evualuate this possibility we could get the same character 2 times
      const getAnotherIndex = Math.floor(Math.random() * people.length);
      setIndex(getAnotherIndex)
      return setLastIndex(getAnotherIndex)
    } else {
      setIndex(randomIndex)
      setLastIndex(randomIndex)
    }

  }



  return (
    <section className='reviews-container'>
      <h1>Our reviews</h1>
      <div className='line-for-title'></div>
      <article className='person-card-container'>
        <div className='person-info-container'>
          <div className='person-img-container'>
            <img src={people[index].image} alt="" />
          </div>
          <div className='person-name-occupation-container'>
            <h4>{people[index].name}</h4>
            <h5>{people[index].job}</h5>
          </div>
          <p className='person-description-container'>
            {people[index].text}
          </p>
        </div>
        <div className='arrows-container'>
          <i className='bx bx-chevron-left' onClick={handleLeftArrowClick}></i>
          <i className='bx bx-chevron-right' onClick={handleRightArrowClick}></i>
        </div>
        <div className='btn-container'>
        <button className='get-random-person-btn' onClick={handleSurpriseMeBtn}>Surprise me</button>
        </div>
      </article>
    </section>
  );
};

export default Review;
