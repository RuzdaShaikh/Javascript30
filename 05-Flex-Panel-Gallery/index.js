const panels = document.querySelectorAll('.panel')

// console.log(panels)

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('open', 'open-active');
          } else if (current.classList.contains('open', 'open-active') === true) {
            current.classList.remove('open', 'open-active');
          } else {
            current.classList.add('open', 'open-active')
          }
        }
        e.preventDefault();
      });
    };
  }
toggleItem(panels)
  
// function openActive(e) {
//     // console.log(e.propertyName)
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active')
//     }
// }
// panels.forEach(panel => panel.addEventListener('transitionend', openActive))


//-------------------------------------------------------------------------------------------
// function toggleOpen() {
//     this.classList.toggle('open')
// }  

// function openActive(e) {
//     // console.log(e.propertyName)
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active')
//     }
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen))
// panels.forEach(panel => panel.addEventListener('transitionend', openActive))

//-------------------------------------------------------------------------------------------
/* Fix (21/08/2023):
Upon double clicking, 'transitionend' is trigerred and .open-active is added without .open.

How to fix this?  IDK
.open and .open-active class must be added and removed together. I don't know how to do that yet.

(23/08/2023): 
Adding a separate 'removeOpen' function removes the previous problem, but the panel does not close upon clicking. It only closes when another panel is opened.
*/