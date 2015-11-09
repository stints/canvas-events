var CanvasEvent = function(canvas) {
  var _canvas = canvas;
  var _events = {
    "click": []
  };

  this.on = function(event_type, params, handler) {
    assert(event_type in _events, "Event type not found.");
    assert("x" in params, "X not found in params");
    assert("y" in params, "Y not found in params");
    assert("width" in params, "Width not found in params");
    assert("height" in params, "Height not found in params");

    var obj = obj || {};
    var event_data = {
      "params": params,
      "handler": handler
    }

    _events[event_type].push(event_data)
  }

  this.clearEvents = function() {
    for(var event_type in _events) {
      _events[event_type] = []
    }
  }

  _canvas.addEventListener("click", function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var clicks = _events["click"];
    var click_data = {};

    clicks.forEach(function(element, index, array) {
      click_data = element;

      if(x >= click_data["params"]["x"] &&
        y >= click_data["params"]["y"] &&
        x <= click_data["params"]["x"] + click_data["params"]["width"] &&
        y <= click_data["params"]["y"] + click_data["params"]["height"]) {
          click_data["handler"](e);
      }
      return;
    });
  });
}

function assert(condition, message) {
  if(!condition) {
    throw message;
  }
}
