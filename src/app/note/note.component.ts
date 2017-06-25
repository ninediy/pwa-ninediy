import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { NoteFormComponent } from '../dialog/note-form/note-form.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',  
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  public myNote: Array<any>;
  public data = {
    txtNote: ''
  }
  constructor(private footballService: FootballService, private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.doGetMyNote();
  }

  doGetMyNote(): void {
    this.myNote = this.footballService.getNote();
  }

  doDeleteNote(): Boolean {
    return false;
  }

  openDialog() {
    let dialogRef = this.dialog.open(NoteFormComponent, {
      height: '300px',
      width: '90%'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.doGetMyNote();//re get new Note
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
