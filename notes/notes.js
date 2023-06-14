const fs = require('fs')

const yargs = require('yargs')
require('./app')
const getNotes = function(){
    return "Your notes..."
}

 addNote = function(title,body){
    const notes = loadNotes();
const duplicateNotes = notes.filter(function (note){
return note.title===title
})
if(duplicateNotes===0){
    notes.push({
        title:title,
        body:body
    })

    console.log()
    saveNotes(notes)
}else{
    console.log("The title is taken")
}
    
}


removeNote = function(title){
    const notes = loadNotes();
    const noNote = notes.filter(function(note){
        return note.title===title
    })
    if(noNote>0){
notes.pop()
saveNotes(notes)
console.log("Popped a note")
    }
    else{
        console.log("There is no such title")
    }
    
}


const saveNotes = function(notes){
const dataJSON = JSON.stringify(notes);
fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes =function(){
    try{
 const dataBuffer = fs.readFileSync("notes.json");
 const dataJSON = dataBuffer.toString();
 return JSON.parse(dataJSON);
}
catch(e){
    return [];
}
}

module.exports = {
    getNotes: this.getNotes,
    addNote: this.addNote,
    removeNote:this.removeNote,
    loadNotes:this.loadNotes
};


yargs.parse();