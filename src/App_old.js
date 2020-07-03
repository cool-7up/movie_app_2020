import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'jjamppong',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/06/19/2756808e5603db7a18c4f5ee9a699ee41.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'jjajangmyeon',
    image: 'https://t1.daumcdn.net/cfile/tistory/99CEE8435A76901B25',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'tangsuyug',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/12/12221690d4f7dc3e0bbdc70d05017b101.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'tteogbokk-i',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/10/07/f43063e718c49d85ddce4880e4a41fcd1.jpg',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'sundae',
    image: 'https://t1.daumcdn.net/liveboard/dailylife/946d34355aab4a4a922de5215f8dc3ce.jpg',
    rating: 4.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};

export default App;
