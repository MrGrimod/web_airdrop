// Subscribing to gps publ
// ----------------------

var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/drone_state',
  messageType : 'cc_node/drone_states'
});
listener.subscribe(function(data) {
  $("#airborne_state").text(data.airborne);
  $("#in_mission_state").text(data.in_mission);
  $("#landing_phase_state").text(data.landing_phase);
});
