import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const FollowersCard = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="20%" src={props.data.avatar_url} alt="Image of person" />
          <CardBody>
            <CardTitle>{props.data.login}</CardTitle>
            <CardText>Followers: {props.data.followers_url}</CardText>
            <CardText>Following: {props.data.following_url}</CardText>
         </CardBody>
        </Card>
      </div>
    );
  };

  export default FollowersCard;