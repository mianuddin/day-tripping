import React from 'react';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';
import Directions from 'material-ui/svg-icons/maps/directions';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

const LocationItem = props => {
  const iconButtonElement = (
    <IconButton
      touch
      tooltip="More options"
      tooltipPosition="top-left"
    >
      <MoreVertIcon color="#BDBDBD" />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem
        primaryText="Navigate"
        leftIcon={<Directions />}
        href={`https://www.google.com/maps/dir/Current+Location/${props.location.lat},${props.location.lng}`} // eslint-disable-line max-len
        target="_blank"
        rel="noopener noreferrer"
      />
      <Divider />
      <MenuItem
        primaryText="Edit"
        leftIcon={<Edit />}
        disabled
      />
      <MenuItem
        primaryText="Remove"
        leftIcon={<Delete />}
        onTouchTap={props.onRemove.bind(this, props.location.id)} // eslint-disable-line
      />
    </IconMenu>
  );

  return (
    <ListItem
      primaryText={props.location.name}
      rightIconButton={rightIconMenu}
      secondaryText={props.location.address}
    />
  );
};

LocationItem.propTypes = {
  location: React.PropTypes.object,
  onRemove: React.PropTypes.func,
};

export default LocationItem;
