//Try this, not certain it will work cause I’m having some electrical work done and all I have is my phone
const ty = `<span style='color:var(--attributeColor)'></span>`
const tAColor = '<span style=\'color:var\\(--attributeColor\\)\'>';
const endHigh = '</span>';
const attriRt = new RegExp("(?<=" + tAColor + ')[\\s\\S]*?' + "(?=" + endHigh + ")", "g");
//console.log(ty.match(attriRt))
const editorCon = document.getElementById('editor-container')
const editor = document.getElementById('code-area');
const keyx = document.getElementById('keyx')
const editorRenderer = document.getElementById('code-area-render');
const consoleOutput = document.getElementById('console-output');
const lineNumberCon = document.getElementById('line-number-container')

let lineNumber = 1;

editor.addEventListener('scroll', e => {
  lineNumberConShadSync()
  lineNumber_Editor_Vertical_Sync_Scroll()
  editorRenderer.scrollTop = editor.scrollTop
  editorRenderer.scrollLeft = editor.scrollLeft
})


function lineNumberAdjuster(event) {
  if (event.inputType === "insertLineBreak") {
    // Enter key is pressed
    //console.log(lineNumber++)
    lineNumberCon.innerText += String(++lineNumber + '\n')
    //console.log(lineNumber.lastElementChild.innerText)
    //lineNumberCon.appendChild(number)
  }

  const totalRealLineBreaks = editor.value.split('').filter(e => e === '\n').length + 1 //+1 due to 1 put there even without any content
  /*if(totalRealLineBreaks > 15) editorCon.style.paddingBottom = "10em"
  else editorCon.style.paddingBottom = "0"*/
  if (lineNumber !== totalRealLineBreaks) {
    const arrFilledWithCorrectLineCount = Array(totalRealLineBreaks).fill(0).map((_, index) => index + 1);
    // console.log(totalRealLineBreaks, arrFilledWithCorrectLineCount)

    lineNumberCon.innerText = arrFilledWithCorrectLineCount.join('\n')
    // console.log(lineNumberCon.style.paddingLeft);
    updateTextareaPadding()
  }

}

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
}
const debouncedUpdate = debounce(lineNumberAdjuster, 0) //wait 300 milliseconds.
editor.addEventListener('input', (event) => {
  updateRenderElem(event.target.value)
  debouncedUpdate(event)
}) //Debounce only runs when continuous action pends for an amount of time, this helps not to run the function everytime.
editor.addEventListener('paste', (event) => {
  if (isCursorAtEndOfLastLine()) autoScroll()
})

function autoScroll() {
  editor.scrollTop = editor.scrollHeight
}

const updateTextareaPadding = () => {
  const lineNumberWidth = lineNumberCon.offsetWidth;
  editor.style.paddingLeft = lineNumberWidth + 10 + 'px';
  editorRenderer.style.paddingLeft = lineNumberWidth + 10 + 'px';
}

function lineNumberConShadSync() {
  const scrollAmount = editor.scrollLeft;
  const threshold = 10; // Change this value to the amount of pixels you want to detect

  if (scrollAmount >= threshold) lineNumberCon.style.boxShadow = '0 0 5px black' //Element has been scrolled', threshold, 'pixels to the right.
  else lineNumberCon.style.boxShadow = '0 0 0 transparent'

}

function lineNumber_Editor_Vertical_Sync_Scroll() {
  let scrollTop = editor.scrollTop;
  if (scrollTop !== editor.dataset.lastScrollTop) lineNumberCon.scrollTop = editor.scrollTop //Vertical scroll detected
  editor.dataset.lastScrollTop = scrollTop;
}


updateTextareaPadding()
window.addEventListener('resize', updateTextareaPadding);

function updateRenderElem(text) {
  if (text[text.length - 1] == "\n") { // If the last character is a newline character
    text += " "; // Add a placeholder space character to the final line 
  }
  //console.log(encryptText)
  editorRenderer.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp("<", "g"), "&gt;");

  // Text containing color names
  //const text = "The sky is blue and the grass is green.";

  // Define color names and their corresponding hex values
  const colors = {
    blue: '#0000FF',
    green: '#008000',
    red: 'red',
    orange: 'orange',
    purple: 'purple',

  };

  // Create a regular expression to match color names
  const colorReg = new RegExp(`\\b(${Object.keys(colors).join('|')})\\b`, 'gi');

  // Replace color names with spans containing the same color
  const formattedText = text.replace(colorReg, (match, colorName) => {
    const colorHex = colors[colorName.toLowerCase()];
    return `<span style="background: ${colorHex}">${match}</span>`;
  });
  new Falloy().highlight(editorRenderer)
  // editorRenderer.innerHTML = new Falloy().highlight(editorRenderer, "html")

  //console.log(Prism)
  //Prism.highlightElement(editorRenderer)
  editorRenderer.scrollHeight = editor.offsetHeight
  //console.log(editorRenderer)
}

function isCursorAtEndOfLastLine(textarea) {
  const cursorPos = textarea.selectionStart;
  const textareaValue = textarea.value;

  // Find the index of the last newline character before the cursor position
  const lastNewlineIndex = textareaValue.lastIndexOf('\n', cursorPos);

  // If there are no newline characters before the cursor, it's not at the end of the last line
  if (lastNewlineIndex === -1) {
    return false;
  }

  // Check if the cursor is at the end of the last line
  return cursorPos === textareaValue.length || cursorPos === lastNewlineIndex + 1;
}


// Function to change color of clicked box
let activeKeyx = false

function changeColor(event) {
  event.target.classList.remove('flash-bg') //remove if any
  void this.offsetWidth
  event.target.classList.add('flash-bg') //trigger again
  if (event.target.classList.contains('joint')) {
    if (event.target.classList.contains('active-key')) event.target.classList.remove('active-key')
    else event.target.classList.add('active-key')
  }
  if (!event.target.classList.contains('joint')) Array.from(keyx.children).forEach(child => child.classList.remove('active-key'))

  // if (event.target.classList.contains('active-key')) event.target.classList.remove('active-key')
  //  else event.target.classList.add('active-key')

}
Array.from(keyx.children).forEach(child => child.addEventListener('click', changeColor))
document.addEventListener('click', (e) => {
  if (!keyx.contains(e.target)) Array.from(keyx.children).forEach(child => child.classList.remove('active-key'))
})