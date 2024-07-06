import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  noteContent: string = '';
  ngOnInit(): void {
    // Load saved note from localStorage when component initializes
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
      this.noteContent = savedNote;
    }
  }
  saveNoteLocally(): void {
    // Save note to localStorage whenever user types in the textarea
    localStorage.setItem('savedNote', this.noteContent);
  }

  downloadNote(): void {
    const blob = new Blob([this.noteContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'note.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
