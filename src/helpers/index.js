export function slugify(string : string) {
  return string.toLowerCase().replace(/\s+/g, '_')
}

export function unslugify(string: string) {
  return string.toLowerCase().replace(/_/g, ' ')
}

export function capitaliseWords(title: string) {
  return title.split(/ /g).map(word => 
    `${word.substring(0,1).toUpperCase()}${word.substring(1)}`)
  .join(' ');
}

export function capitaliseAll(title: string) {
  return title.replace(/\w/g, letter => letter.toUpperCase())
}

// Function from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
export function shadeColor (color, percent) {
  const f = parseInt(color.slice(1), 16)
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = f >> 16
  const G = (f >> 8) & 0x00ff
  const B = f & 0x0000ff
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  )
}

// Function from https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
export function copyToClipboard (element) {
  const el = document.createElement('textarea') // Create a <textarea> element
  el.value = element.textContent // Set its value to the string that you want copied
  el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px' // Move outside the screen to make it invisible
  document.body.appendChild(el) // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false // Mark as false to know no selection existed before
  el.select() // Select the <textarea> content
  document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el) // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges() // Unselect everything on the HTML document
    document.getSelection().addRange(selected) // Restore the original selection
  }
}