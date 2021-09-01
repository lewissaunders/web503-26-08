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