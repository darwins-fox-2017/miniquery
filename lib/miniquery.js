'use strict'
/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(selector) {
    let selected = document.querySelector(selector)
    return selected
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(selector) {
    let hider = document.querySelector(selector)
    hider.style.display = 'none'
    return hider
    // let data = document.querySelector(selector)
    // let data = document.style.display
  }
  static show(selector) {
    let shower = document.querySelector(selector)
    shower.style.display = 'block'
  }
  static addClass(selector, name) {
    let classAdd = document.querySelector(selector)
    classAdd.classList.add(name)
    return classAdd
  }
  static removeClass(selector, name) {
    let classRemove = document.querySelector(selector)
    classRemove.classList.remove(name)
    return classRemove
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(kelas, epent, func) {
    let selectEvent = document.querySelector(kelas)
    selectEvent.addEventListener(epent, func())
    return selectEvent
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(data) {
    var lequest = new XMLHttpRequest();
    lequest.open(data.type, data.url, true);
    lequest.onload = function() {
      if (lequest.status >= 200 && lequest.status < 400) {
        console.log("Success");
        var data = JSON.parse(lequest.responseText);
      } else
        console.log("Something wong");
    };
    lequest.onerror = function() {
      console.log("conn err");
    };
    lequest.send();
  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

function miniquery(selector) {
  function hide() {
    DOM.hide(selector)
  }
  function show() {
    DOM.show(selector)
  }
  return ({
    this: SweetSelector.select(selector),
    hide: hide,
    show: show
  })
}

let $ = miniquery
