/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector{
  static select(value){
    return document.querySelectorAll(value)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM{
   static hide(val){
     let hider = SweetSelector.select(val)
     hider.forEach(function(data){
      data.style.display = 'none'
     })
   }

   static show(val){
     let shower = SweetSelector.select(val)
     shower.forEach(function(data){
       data.style.display = ''
     })
   }

   static removeClass(val, className){
     let rmv = SweetSelector.select(val)
       rmv.forEach(function(data){
         if (data.classList)
         data.classList.remove(className);
         else
         data.className = data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
       })
     }

   static addClass(val, className){
     let add = SweetSelector.select(val)
     add.forEach(function(data){
       if (data.classList)
       data.classList.add(className);
       else
       data.className += ' ' + className;
     })
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher{
  static on (val, eventName, eventHendler){
    let dispatcher = SweetSelector.select(val)
    dispatcher.forEach(function(data){
      data.addEventListener(eventName, eventHendler())
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper{
   static request(object){
     let url = object.url
    //  let success =
     let fail = object.fail

     var request = new XMLHttpRequest();
     request.open('GET', url, true);

     request.onload = function() {
     if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      object.success(data)
    } else {
      // We reached our target server, but it returned an error
      fail(request)
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
  }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 function miniquery(val){
   function hide(){
     DOM.hide(val)
   }
   function show(){
     DOM.show(val)
   }
   return ({
     this : SweetSelector.select(val),
     hide : hide,
     show : show
   })
 }

let $ = miniquery
