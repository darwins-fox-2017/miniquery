/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(valueId) {
    return document.querySelectorAll(valueId)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM {
   static hide(valueId) {
     var selection = SweetSelector.select(valueId)
      selection.forEach(function (data) {
        data.style.display = 'none';
     })
   }
   static show(valueId) {
     var selection = SweetSelector.select(valueId)
      selection.forEach(function (data) {
        data.style.display = "";
     })
   }
   static removeClass(valueId, className) {
     var selection = SweetSelector.select(valueId)
      selection.forEach(function (data) {
        if (data.classList)
          data.classList.remove(className);
        else
          data.className = data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
     })
   }
   static addClass(valueId, className) {
     var selection = SweetSelector.select(valueId)
      selection.forEach(function (data) {
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
class EventDispatcher {
  static on(valueId, eventName, eventHandler) {
    var selection = SweetSelector.select(valueId)
     selection.forEach(function (data) {
       data.addEventListener(eventName, eventHandler());
     })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(options) {
    // console.log('test');
    var url = options.url,
        type = options.type,
        success = options.success,
        fail = options.fail;

    var request = new XMLHttpRequest();
      request.open(type, url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        // Success!
          success(request);
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
// function miniquery(value, className) {
function miniquery(value) {

  function hide() {
    DOM.hide(value)
  }

  function show() {
    DOM.show(value)
  }

  // function addClass() {
  //   DOM.addClass(value, className)
  // }
  //
  // function removeClass() {
  //   DOM.removeClass(value, className)
  // }
  //
  // function on() {
  //   EventDispatcher.on('.klass', 'click', function() {
  //     console.log("Awesome")
  //   })
  // }

  return ({
    this: SweetSelector.select(value),
    hide: hide,
    show: show
    // addClass: addClass,
    // removeClass: removeClass,
    // on: on
  })
}
var $ = miniquery
