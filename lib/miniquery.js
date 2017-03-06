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


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
