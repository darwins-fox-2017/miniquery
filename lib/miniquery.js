/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 class SweetSelector {
   static select(val){
     return document.querySelectorAll(val)
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM {
   static hide(val){
     let list = document.querySelectorAll(val)
     for(let i=0; i<list.length; i++){
       list[i].style.display = 'none'
     }
   }

   static show(val){
     let list = document.querySelectorAll(val)
     console.log(list);
     for(let i=0; i<list.length; i++){
       list[i].style.display = ''
     }
   }

   static removeClass(className,val){
     let list = SweetSelector.select(className)
     list.forEach(function(data){
       if (data.classList) data.classList.remove(val);
       else data.className = data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
     })
   }

  static addClass(className, val){
    let list = SweetSelector.select(className)
    console.log(list);
    list.forEach(function(data){
      if (data.classList)
        data.classList.add(val);
      else
        data.val += ' ' + val;
    })
  }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher {
   static on(className, val, cb ) {
     let list = SweetSelector.select(className)

     list.forEach(function(data){
       data.addEventListener(val,cb)
     })
   }
 }



/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper{
   static request(val){
     let request = new XMLHttpRequest()
     request.open(`${val.type}`,`${val.url}`,true)

     request.onload = function () {
       if (request.status >= 200 && request.status < 400) {
         var data = JSON.parse(request.responseText)
         val.success(data)
       }
     }

     request.onerror = function(){
       return val.fail()
     }

     request.send();
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 var miniquery = function (val) {

   function hide() {
     DOM.hide(val)
   }

   function show() {
     DOM.show(val)
   }

   return ({
     this : SweetSelector.select(val),
     hide : hide,
     show : show
   })
 }

 let $ = miniquery
