# canvas-events
  ```javascript
    // get canvas element and pass to instance of CanvasEvents
    canvasEvents = new CanvasEvents(canvas)
    
    // as you draw to the canvas, add the events
    params = {"x":10,"y":10,"width":55,"height":50}
    ctx.fillRect(params.x, params.y, params.width, params.height);
    canvasEvents.on("click", params, function(e) {
      // handle click event
      console.log("canvas 'element' clicked");
    });
  ```
  
currently only click event supported
