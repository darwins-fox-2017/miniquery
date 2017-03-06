/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 const SweetSelector = {
   select: function(selector){
     return document.querySelectorAll(selector);
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 const DOM = {
  hide: function(selector){
   var div = SweetSelector.select(selector)
   for(var i = 0; i < div.length;i++){
     div[i].style.display = "none"
   }
  //  return selector;
 },
 show: function(selector){
  var div = SweetSelector.select(selector)
  for(var i = 0; i < div.length;i++){
    div[i].style.display = ""
  }
  // return selector;
 },
 addClass: function(selector, name){
  var div = SweetSelector.select(selector)
  for(var i = 0; i < div.length;i++){
    div[i].classList.add(name);
  }
 },
 removeClass: function(selector, name){
  var div = SweetSelector.select(selector)
  for(var i = 0; i < div.length;i++){
    div[i].classList.remove(name);
  }
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
