const fs = require('fs');
// const chalk = require('chalk');

const yargs = require('yargs');
const notes = require('./notes');
const { title } = require('process');



loadNotes=()=>{
    try{
 const dataBuffer = fs.readFileSync("notes.json");
 const dataJSON = dataBuffer.toString();
 return JSON.parse(dataJSON);
}
catch(e){
    return [];
}
}

listNotes=()=>{
    const notes = loadNotes();
    notes.forEach(element => {
      console.log(`Title: ${element.title}`)
      console.log(`Body: ${element.body}`)

    })
}
listNotes()
 addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note)=>{
        return note.title===title
        })
        if(duplicateNotes==0){
            notes.push({
                title:title,
                body:body
            })
        
            console.log("Successfully added a note")
            saveNotes(notes)
        }else{
            console.log("The title is taken")
        }
        
}

removeNote = (argv)=>{
    
    const notes = loadNotes();
   
     noNote = notes.filter( (note)=>{
        console.log(note.title)
        return note.title !==title
// if(notes.length>noNote.length){
//     console.log(note.title)
//     return false
// }else
// console.log(note.title)
// return true;
    })
    // console.log(argv.title)
    if(notes.length>noNote.length){
notes.pop(argv);
console.log("A note is deleted");

saveNotes(noNote)
    }else{
        console.log("There is no such note")
    }
    

// console.log("A note is popped")

}




const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
    }
yargs.version('1.1.0')


yargs.command({
    command:'add',
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demadOption:true
                }
    },
    handler(argv){
       addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
      
            removeNote(argv.title)        
         

    }
})

yargs.command({
    command:'List',
    describe:'Listing the notes',
    handler(){
        console.log("Listing out all the notes");
    }
})

yargs.command({
    command:'read',
    describe:'Reading a note',
    handler(){
        console.log("reading a note")
    }
})

yargs.parse();



