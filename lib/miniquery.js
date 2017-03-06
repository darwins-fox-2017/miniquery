/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    static select(str) {
      var selectAll = document.querySelectorAll(str)

      return selectAll
    }
  }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(str) {
    let queryHide = document.querySelectorAll(str)
    // console.log(queryHide);

    for(let i = 0; i < queryHide.length; i++) {
      queryHide[i].style.display = "none"
    }
  }

  static show(str) {
    let queryShow = document.querySelectorAll(str)

    // console.log(queryShow);
    for (var i = 0; i < queryShow.length; i++) {
      queryShow[i].style.display = ""
    }
  }

  static removeClass(className, del) {
    let queryRemove = SweetSelector.select(className)
    // console.log(queryRemove);

    queryRemove.forEach(function (data){
      if (data.classList)
        data.classList.remove(del);
      else
        data.className = data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      })
  }

  static addClass(className, classAdd) {
    let queryAdd = SweetSelector.select(className)
    console.log(queryAdd);

    queryAdd.forEach(function (data) {
      if (data.classList)
        data.classList.add(classAdd);
      else
        data.className += ' ' + classAdd;
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {
   static on(className, eventName, func) {
     let selectEvent = SweetSelector.select(className)
    //  console.log(selectEvent);

     selectEvent.forEach(function (data) {
       data.addEventListener(eventName, func())
     })
   }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(dom) {
    let url = dom.url
    let type = dom.type
    let success = dom.success
    let fail = dom.fail

    let request = new XMLHttpRequest();
    request.open(type, url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
      // Success!
      success(request)
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

function miniquery(val) {
  function hide() {
    DOM.hide(val)
  }

  function show() {
    DOM.show(val)
  }

  return ({
    this: SweetSelector.select(val),
    hide: hide,
    show: show
  })
}

var $ = miniquery
