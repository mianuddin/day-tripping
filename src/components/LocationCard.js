import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import '../styles/partials/_LocationCard';

const LocationCard = props => (
  <Card className="LocationCard">
    <CardTitle title={props.location.name} />
    <CardText>{props.location.address}</CardText>
    <CardActions>
      <FlatButton
        label="Remove"
        onClick={props.onRemove.bind(this, props.location.id)} // eslint-disable-line
      />
    </CardActions>
  </Card>
);

LocationCard.propTypes = {
  location: React.PropTypes.object,
  onRemove: React.PropTypes.func,
};

export default LocationCard;
