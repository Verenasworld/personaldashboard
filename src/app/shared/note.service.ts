
import { Injectable, OnDestroy, } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements OnDestroy {
  notes: Note[] = [
  ]
  storageListenSub: Subscription
  


  constructor() {
    this.loadState();

    //listen to the strorage event from another (tap , window)
    //function return a observable
    // window = target | storage = eventname 

    // this.storageListenSub = fromEvent(window, 'storage')
    // .subscribe((event: StorageEvent) => {
    //   if (e vent.key === 'notes') this.loadState()
    // })
    
    //@ts-ignore
   this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
     if (event.key=== 'notes') 
     this.loadState()
     console.log(event.key);
      });
    

    
   }
  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getNotes(){
    return this.notes;
  }

  // get Note return true when the (object-id) n.id quals the id id passed into this    method
      //id matches the id passed in 
      // gibt true zurück , wenn die objekt id an diese Methode überebene ID - ID qualifiziert ? gleich ist ? 
      //one line error function (shorthand) 

  getNote(id: string) {
     return this.notes.find(n => n.id === id);
  }

  addNote(note: Note){
    this.notes.push(note);
    this.saveState();
  }

  updateNote(id: string, updatedFields: Partial<Note>){
    const note = this.getNote(id);
    Object.assign(note, updatedFields);
    this.saveState();
  }

  //Die Methode Object.assign() kopiert die Werte aller aufzählbaren, eigenen Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt. Es wird das Zielobjekt zurückgegeben.

deleteNote(id:string){
 const noteIndex = this.notes.findIndex(n => n.id === id )
 if(noteIndex == -1) return
 this.notes.splice(noteIndex, 1);
 this.saveState();
}
//find the index of notes which has the id in the array 

//Die Methode findIndex() gibt den Index des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt. Andernfalls wird -1 zurückgegeben, um anzuzeigen, dass kein Element den Test bestanden hat.
// splice()Method changes the content of an array by removing existing elements and / or adding new elements.





//create Method that save the state from note array in local storage / store note array in local stroage / confert note array in json string / when we calling the saveState Method we will saving the 
//notes array in localstorage as json string - each time wenn we add a note we want to saveState and each time when we want updateNote and also when we delete the note
saveState(){
 localStorage.setItem('notes', JSON.stringify(this.notes));
}


//load the state from local storage 
//JSON.parse()- erzeugt aus einem JSON- format txt ein js object. 
loadState(){
  try{
     const notesInStorage = JSON.parse(localStorage.getItem('notes')!);
    
    // if(!notesInStorage) return
     this.notes.length = 0;//clear the notes array ( while keeping the reference )
     this.notes.push(...notesInStorage);

  }
  catch(e){
    console.log('There was an error retrieving the notes from localStorage');
    console.log(e);

}
  
}

}


