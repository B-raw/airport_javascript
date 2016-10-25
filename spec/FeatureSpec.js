'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions',function(){
      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0);
      });

      it('planes can be instructed to land at an airport', function(){
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
      });

      it('planes can be instructed to takeoff', function(){
        plane.land(airport)
        plane.take_off();
        expect(airport.planes()).not.toContain(plane);
      });
    });

  describe('under stormy conditions',function(){

    it('blocks take off when weather stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.take_off();}).toThrowError('cannot takeoff during the storm');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather stormy', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ plane.land(airport);}).toThrowError('cannot land during the storm')
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
