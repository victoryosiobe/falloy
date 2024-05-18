const filesEndPoint = '/files'
fetch(filesEndPoint, {
  method: 'POST',
  body: JSON.stringify({ userExactWords: gotten_user_text, clientTime: new Date().toLocaleTimeString(), genTitle: genTitlePass /* geneTitle */ }),
  headers: {
    'Content-Type': 'application/txt'
  },
}).then(filesList => filesList.text()).then(filesList => organizeFileStructure(filesList))


function organizeFileStructure(list){
  
}