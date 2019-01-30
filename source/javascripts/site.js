// On page load, setup the accordions
document.addEventListener("DOMContentLoaded", (event) => {
  let accordions = document.querySelectorAll('.category-dropdown dt')
  setupAccordionGroup(accordions)
  // ensure current page's accordion group is open
  openCurrentAccordion()
})

// For each accordion in the group, add click listener to toggle the accordion description
function setupAccordionGroup(tiles, manyOpen=false) { 
  tiles.forEach((def, index) => {
    def.addEventListener('click', function(event) {
      handleAccordionToggle(index, def, tiles, manyOpen)
    })
  })
}

// Callback for an accordion item being clicked.
// Parameters:
//    index:     the index of the current item in the array of accordion items
//    def:       the current accordion item 
//    tiles:     the full list of tiles/accordion items
//    manyOopen: whether multiple tiles in the group may be open at the same time
function handleAccordionToggle(index, def, tiles, manyOpen) {  
  // Check if we only want the one tab open at a time
  if (!manyOpen) {
    closeAll(tiles, index);
  }
  def.classList.toggle('is-open');
}

// Makes sure all other accordion items in a group are closed
function closeAll(tiles, ignoreIndex) {
  tiles.forEach(function(def, index) {
    if (index !== ignoreIndex) {
      def.classList.remove('is-open');
    }
  });
}

function openCurrentAccordion () {
  let currentPost = document.querySelectorAll('.post[data-category]')
  // if there isn't a current post, bail.
  if (!currentPost) { return }
  // get the category, and open the accordion
  let currentCategory  = currentPost[0].dataset.category
  let currentAccordion = document.querySelectorAll(`dl[data-category="${currentCategory}"] dt`)
  currentAccordion.forEach((accordion) => {
    accordion.click()
  })
  // Now let's set an active class on the current 
  let currentTitle            = currentPost[0].dataset.title
  let selectedAccordionOption = document.querySelectorAll(`dd [data-title="${currentTitle}"]`)
  selectedAccordionOption[0].classList.add('active')
}