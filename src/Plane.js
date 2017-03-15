"use strict";

function Plane() {};

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this.location = airport;
};

Plane.prototype.takeoff = function() {
  this.location.clearForTakeOff("");
};
