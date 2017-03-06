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
        var elements = document.querySelectorAll(selector);
        return elements
        //  If you like to return one by one
        //  Array.prototype.forEach.call(elements, function(el, i){
        //
        //  });
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    static hide(el) {
        var elements = SweetSelector.select(el)
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    }

    static show(el) {
        var elements = SweetSelector.select(el)
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = '';
        }
    }

    static addClass(el, className) {
        var elements = SweetSelector.select(el)
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.add(className);
            } else {
                elements[i].className += ' ' + className;
            }

        }
    }

    static removeClass(el, className) {
        var elements = SweetSelector.select(el)
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList)
                elements[i].classList.remove(className);
            else
                elements[i].className = elements[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    static on(el, eventName, command) {
        var elements = SweetSelector.select(el)
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            var event = document.createEvent('HTMLEvents');
            event.initEvent('click', true, false);
            elements[i].dispatchEvent(event);

            command()
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
    static request(params) {
      console.log(params);
        var request = new XMLHttpRequest();
        request.open(params.type, params.url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = request.responseText;
                console.log('data :', data);
                params.success(data)
                // return data
            } else {
                // We reached our target server, but it returned an error
                // return false
                params.fail()
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
