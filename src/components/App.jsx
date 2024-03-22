import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

console.log(notes);

function createNote (noteItem){
    return   <Note
        key = {noteItem.id}
       title = {noteItem.title}
       content = {noteItem.content}
    />
}

function App() {
    return <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
  
}

export default App;