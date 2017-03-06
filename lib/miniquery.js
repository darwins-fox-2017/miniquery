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
  static select(value) {
    return document.querySelectorAll(value)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(value) {
    let selectValue = SweetSelector.select(value)
    selectValue.forEach(function(data) {
      data.style.display = 'none'
    })
  }

  static show(value) {
    let selectValue = SweetSelector.select(value)
    selectValue.forEach(function(data) {
      data.style.display = ''
    })
  }

  static addClass(id, newClass) {
    let selectValue = SweetSelector.select(id)
    selectValue.forEach(function(data) {
      if (data.classList) {
        data.classList.add(newClass)
      } else {
        data.newClass += ' ' + newClass
      }
    })
  }

  static removeClass(id, clasName) {
    let selectValue = SweetSelector.select(id)
    selectValue.forEach(function(data) {
      if (data.classList) {
        data.classList.remove(clasName)
      } else {
        data.clasName += data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {
  static on(clasName, classEvent, cb) {
    let selectValue = SweetSelector.select(clasName)
    for (let i = 0; i < selectValue.length; i++) {
      selectValue[i].addEventListener('click', cb())
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(object) {
    let request = new XMLHttpRequest()
    request.open(object.type, object.url, true)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.response)
        return object.success(data)
      } else {
        object.fail()
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

//Alias
let $ = miniquery
