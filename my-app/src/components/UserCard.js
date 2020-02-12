import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const UserCard = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="20%" src={props.data.avatar_url} alt="Image of person" /> 
          <CardBody>
            <CardTitle>{props.data.name}</CardTitle>
            <CardSubtitle>{props.data.login}</CardSubtitle>
            <CardText>Followers: {props.data.followers}</CardText>
            <CardText>Following: {props.data.following}</CardText>
            <CardText>Bio: {props.data.bio}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default UserCard;