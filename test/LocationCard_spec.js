/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CardTitle from 'material-ui/Card/CardTitle';
import CardText from 'material-ui/Card/CardText';
import FlatButton from 'material-ui/FlatButton';
import LocationCard from '../src/components/LocationCard';

const location = {
  name: 'SF',
  address: 'San Francisco, CA, United States',
  id: 'SFO',
};

describe('LocationCard', () => {
  it('renders location information', () => {
    const component = shallow(
      <LocationCard
        location={location}
        onRemove={console.log} // eslint-disable-line no-console
      />
    );

    expect(component.children().contains(<CardTitle title={location.name} />)).to.equal(true);
    expect(component.children().contains(<CardText>{location.address}</CardText>)).to.equal(true);
  });

  it('renders a remove button', () => {
    const component = shallow(
      <LocationCard
        location={location}
        onRemove={console.log} // eslint-disable-line no-console
      />
    );

    expect(component.find(FlatButton)).to.have.length(1);
  });
});
