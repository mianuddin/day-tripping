import React from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const LocationItem = props => {
  const iconButtonElement = (
    <IconButton
      touch
      tooltip="More options"
      tooltipPosition="top-left"
    >
      <MoreVertIcon color={Colors.grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem
        onTouchTap={props.onRemove.bind(this, props.location.id)} // eslint-disable-line
      >
        Remove
      </MenuItem>
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
