// getElementById ()
//querySelector ()

//getElementsByClassName ()
//getElementsByTagName ()
//querySelectorAll('li.Item')

//innerHTML
//textContent


const itemOne = document.getElementById('one');
itemOne.className = 'matt';
//DOM queries
//document.getElementById('two')

/*
item()

const tag = document.getElementByClassName('item');
if(tags.length >= 1) {
    const selectedTag = tags.item(2)
}
*/

/**
 * Array Syntax > item()
 * const tags = document.getElementByClassName('item')
        if(tags.length >= 1) {
        const selectedTag = tags(2)
        selectedTag.className = 'change'
    }
 */
/**
 * CSS Selectors
 * document.querySelector(li.item) //Node
 * document.querySelectorAll(li.item)
 * selectedTag[2].className = 'change'
 * 
 */

/**
 * const selectedTag = document.querySelectorAll(li.item)
 //NodeList
 * for(let i = 0; i < selectedTag.length; i++) {
     selectedTag[i].className = 'itemlist'
 }
 */

 // previous and Next sibling tags
 // Start with a starting element, then from there you can go next or previous element (shown below)
 /**
  * const startEl = document.getElementById('two')
  * const preEl =  startEl.previousSibling
  * const nextEl = startEl.nextSibling
  * 
  * preEl.className = 'diffcolor'
  * nextEl.className = 'changefont'
  */

 // First and Last child
 /**
  * const startEl = document.getElementByTagName('ul')[0]
  * const firstElement = startEl.firstChild
  * const lastElement = startEl.lastChild
  * 
  * firstEl.className = 'diffcolor'
  * lastEl.className = 'changefont'
  */

 // practice 
 /**
  * const startEl = document.getElementByTagName('li')[0]
  * lastEl.text = 'New Text'
  */

 /**
  * 
  */