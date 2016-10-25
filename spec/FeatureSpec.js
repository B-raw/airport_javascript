'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can take off from airport', function(){
    plane.land(airport);
    plane.take_off();
    expect(airport.planes()).not.toContain(plane);
  });

});
