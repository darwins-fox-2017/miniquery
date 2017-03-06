/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select (val) {
    return document.querySelectorAll(val)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide (val) {
    var hideClass = SweetSelector.select(val)
    console.log(hideClass)
    for (var i = 0; i < hideClass.length; i++) {
      hideClass[i].style.display = 'none'
    }
  }

  static show (val) {
    var showClass = SweetSelector.select(val)
    for (var i = 0; i < showClass.length; i++) {
      showClass[i].style.display = 'none'
    }
  }

  static removeClass (element1, element2) {
    var thisClass = SweetSelector.select(element1)
    thisClass.forEach(function (data) {
      if (data.classList)
        data.classList.remove(element2)
      else
        data.className = data.element2.replace(new RegExp('(^|\\b)' + element2.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    })
  // console.log(element1)
  }

  static addClass (element1, element2) {
    var thisClass = SweetSelector.select(element1)
    thisClass.forEach(function (data) {
      if (data.classList)
        data.classList.add(element2)
      else
        data.className += ' ' + element2
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on (className, eventName, eventHandler) {
    var thisClass = SweetSelector.select(className)
    thisClass.forEach(function (data) {
      data.addEventListener(eventName, eventHandler())
    })
  }

}
/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request (value) {
    var request = new XMLHttpRequest()
    request.open(value.type, value.url, true)
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.response)
        return value.success(data)
      } else {
        return value.fail(data)
      }
    }
    request.send()
  }
}
/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery (className) {
  function hide () {
    DOM.hide(className)
  }
  function show () {
    DOM.show(className)
  }
  return ({
    this: SweetSelector.select(className),
    hide: hide,
    show: show
  })
}

var $ = miniquery
