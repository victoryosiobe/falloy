class Falloy {
  highlight(el) {
    const e = el.innerText
    let typeOfColor = ''
    const startTagDetect = /<(?=\w)|<\/(?=\w)/g

    function colorize(typeOfColor) {
      return `<span class="${typeOfColor}">`
    }
    const end = `</span>`
    el.innerHTML = e.replace(startTagDetect, (match) => colorize("tag") + match + end)
  //  console.log(e.match(startTagDetect))
 //   console.log(e.match(startTagDetect), el.innerText, el.innerHTML)
  }









  /*  highlight(element, lang) {
      let text = element.innerHTML

      const aOTagHeadColor = `<span style='color:var(--openTagColor)'>`
      const tAColor = `<span style='color:var(--attributeColor)'>`
      const quoteColor = `<span style='color:var(--quoteColor)'>`
      const baseColorOpp = `<span style='color:var(--attributeColorThin)'>`
      const baseColor = `<span style='color:var(--editor-base-color)'>`
      const fally = `<abc>`

      const angleOpenR = /(?<=\s*&lt;\/?\s*)[^\s&\/]+/gm
      const quoteReg = /\=("|')[\s\S]*?("|')/g
      const endTagR = /\/&gt;|((?<!(--))&gt;)/g
      const endHigh = `</span>`
      const endHighBeginAttribute = `</span>${tAColor}`
      RegExp.escape = function(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
      const colorAttriValue = getComputedStyle(document.documentElement).getPropertyValue('--attributeColor');

      const attriR = new RegExp(`${tAColor}[\\s\\S]*${endHigh}`, "g")
      //  alert(attriR + ' ' +text.match(attriR))

      //  console.log(document.styleSheets[0].cssRules[0].style.getPropertyValue())
      const first = (() => {

        text = text.replace(angleOpenR, m => aOTagHeadColor + m + endHighBeginAttribute)
        text = text.replace(endTagR, m => endHigh + m)
        text = text.replace(attriRt, m => m.replace(quoteReg, m2 => baseColorOpp + "=" + endHigh + quoteColor + m2.slice(1) + endHigh))
      })()
      console.log(text, text.match(attriRt))
     // const tagAttributeR = /(?<=^\s*&lt;\s*\/?\s*[^\s&\/]+)[\s\S]*(?=&gt;$)/gm
   //   console.log(text.match(tagAttributeR))


      const second = (() => {
        // console.log(text.match(attriR), attriR)
      })()
      //  console.log(text)
      return text

      /*if (lang === 'html') {
        const templateOpenTag = `<span style='color:var(--openTagColor)'>`
        const angleBracColor = `<span style='color:var(--editor-base-color)'>`
        const quoteColor = `<span style='color:var(--quoteColor)'>`
        const attributeColor = `<span style='color:var(--attributeColor)'>`
        const attributeColorEqualTo = `<span style='color:var(--attributeColorThin)'>`
        const commentTag = `<span style='color:var(--editor-base-color)'>`
        const closeTag = `</span>${attributeColor}`
        const actCloseTag = `</span>`
        const firstStep = (() => {
          const tags = /(?<=(&lt;\s*(\/)?\s*))(?!(\!\-\-))[\s\S]+?(?=(&gt;|\s+?))/g
          text = text.replace(tags, (match) => {
            if (match.startsWith('/')) return `/${templateOpenTag}${match.slice(1)}${actCloseTag}`
            return templateOpenTag + match + closeTag
          })

          const openTagTopLevelReg = /&lt;(\/?)[\s\S]+?&gt;/g
          const openTagContentReg = /&lt;(?!\/)[\s\S]+&gt;/g
          const openTagContentStartReg = /(?<=^\s*&lt;(?!\/)\s*)(?!(!--))[^\s&]+/gm
          const openTagPlainReg = /&lt;(\/?)/g
          const closeTagReg = /(?<!\-\-)&gt;/g
          const quoteReg = /(?<=[\w\W])\=("|')[\s\S]*?("|')/g
          const actAtributeReg = /\b[a-zA-Z\d-]+\s*=\s*"[^"]*"\s+/g;

          /(?<=((&lt;\s*(\/)?\s*)(?!(\!\-\-)|\/).+?))\s*.+?(?=\=|\s*)\s*(?=(&gt;|\s+?))/g
          text = text.replace(openTagContentReg, (match) => {
            match = match.replace(openTagContentStartReg, match => templateOpenTag + match + actCloseTag)

            match = match.replace(actAtributeReg, match => match.replace(quoteReg, m => attributeColorEqualTo + "=" + actCloseTag + quoteColor + m.slice(1) + actCloseTag))
            //match = match.replace(closeTagReg, (match) => actCloseTag + match)

            return match
          })
          const commentCloseTag = /--&gt;(?=\s*$)/gm
          const commentOpenTag = /(?<=^\s*)&lt;!--/gm

          text = text.replace(openTagTopLevelReg, match => {
            if (!(match.match(commentOpenTag) || match.match(commentCloseTag)))
              return match.replace(openTagPlainReg, match => angleBracColor + match + actCloseTag).replace(closeTagReg, match => angleBracColor + match + actCloseTag)
            else return match
          })

          const commentReg = /&lt;!--[\s\S]+?--&gt;/g;
          text = text.replace(commentReg, (match) => commentTag + match.replaceAll(templateOpenTag, "").replaceAll(attributeColor, "").replaceAll(attributeColorEqualTo, "").replaceAll(quoteColor, "").replaceAll(angleBracColor, "").replaceAll(closeTag, "").replaceAll(actCloseTag, "") + actCloseTag)
        })()

        return text
      }


      function removeSpanInMatch(text) {
        match.replace(new RegExp("<span style='color:var(--.+?)'>.+</span>"), (match) => {
          console.log(match, "xen")

        })
      }
    
  }*/
  /*
     processCommentedHTML(html, stringsToRemove) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Find all comment nodes
      const commentNodes = doc.body.querySelectorAll(':scope > comment');

      // Process each comment node
      commentNodes.forEach(commentNode => {
        // Remove specified strings from comment node's value
        let commentContent = commentNode.nodeValue;
        stringsToRemove.forEach(str => {
          commentContent = commentContent.replace(new RegExp(str, 'g'), '');
        });

        // Wrap remaining comment content with span element for styling
        const span = document.createElement('span');
        span.style.color = 'darkgrey';
        span.textContent = commentContent;

        // Replace comment node with span element
        commentNode.parentNode.replaceChild(span, commentNode);
      });

      return doc.documentElement.outerHTML;
    }

    // Example usage:
    html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
  </head>
  <body>
      <!-- This is a comment with some unwanted text -->
      <div>
          <!-- Another comment with more unwanted text -->
          <p>Hello, world!</p>
      </div>
      <!-- Nested comment -->
      <!-- <div>
          <p>This is inside a nested comment with unwanted text.</p>
      </div> -->
  </body>
  </html>
  `;

    const stringsToRemove = ['unwanted', 'text']; // Specify strings to remove from comments

    html = processCommentedHTML(html, stringsToRemove);
    console.log(html);*/
  /*
  encryptText(text) {
    const tagsAndEntitiesReg = /<.+?>|&.+?;/g

    const matchesArr = []
    const encryptValue = this.randomUnique(text)
    console.log(encryptValue)

    text = text.replace(tagsAndEntitiesReg, (match, index) => {
      // console.log(match, index)
      matchesArr.push([match, index])
      return encryptValue
    })
  }
  randomUnique(text, length = 10) {
    while (true) {&& 
      const alphaNums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let randholder = ''
      for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * length)
        randholder += alphaNums[randIndex]
      }
      if (text.indexOf(randholder) === -1) return randholder
      else continue
    }
  }
*/
}