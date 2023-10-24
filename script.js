// First, bring in all of the panels from index.html
const panels = document.querySelectorAll('.panel')

// Loop through each panel and add an event listener
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // Remove the 'active' class from all panels
    panels.forEach((panel) => {
      panel.classList.remove('active')
    })

    // Add the 'active' class to the clicked panel
    panel.classList.add('active')
  })
})
