import React from 'react';

import { List } from 'material-ui/List';
import Icon from 'material-ui/svg-icons/maps/near-me';
import LocationItem from './LocationItem';

const LocationList = (props) => {
  const ListJSX = (
    <List>
      {props.locations.map((location, index) => (
        <LocationItem location={location} key={index} onRemove={props.onRemove} />
      ))}
    </List>
  );

  const EmptyStateJSX = (
    <div className="LocationList--empty">
      <Icon
        className="LocationList__Icon"
        style={{
          height: 'auto',
          width: '100px',
        }}
      />
      <p>You have no locations. <br />Try adding one!</p>
    </div>
  );

  return (
    <div className="LocationList">
      {
        !props.locations.length
        ? EmptyStateJSX
        : ListJSX
      }
    </div>
  );
};

LocationList.propTypes = {
  locations: React.PropTypes.array,
  onRemove: React.PropTypes.func,
};

export default LocationList;
