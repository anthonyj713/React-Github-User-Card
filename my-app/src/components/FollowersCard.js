import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

  const FollowersCard = (props) => {
    return (
      <div className='container'>
        <Card className='card'>
          <CardImg className='cardImg' top width="20%" src={props.data.avatar_url} alt="Image of person" />
            <CardBody>
              <CardTitle className='cardTitle'>{props.data.login}</CardTitle>
              <CardText>Followers: {props.data.followers_url}</CardText>
              <CardText>Following: {props.data.following_url}</CardText>
            </CardBody>
        </Card>
        
      </div>
    );
  };

  export default FollowersCard;