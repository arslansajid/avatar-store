/* eslint-disable camelcase */
import React from 'react'
import { Header, Divider, Image, Item } from 'semantic-ui-react'
import StarRatings from 'react-star-ratings';

export default (props) => (
  <div>
    <Header as="h3">Reviews</Header>

    <Divider />

    <div class="ui items">
      <div class="item">
        <div class="ui tiny image"><img src={"https://i0.wp.com/www.reliableroofingphilly.com/wp-content/uploads/2015/04/male-placeholder-image.png?ssl=1"} /></div>
        <div class="content">
          <div class="header">{props.review.name}</div>
          <div class="meta">{props.review.review}</div>
          <StarRatings
            rating={Number(props.review.star)}
            starRatedColor="#e3530d"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="0px"
            svgIconViewBox={'0 0 20 20'}
            gradientPathName={window.location.pathname}
            svgIconPath="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
            name='rating'
          />
        </div>
      </div>
    </div>
  </div>
)
