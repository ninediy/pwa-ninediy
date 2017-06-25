import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  public data = {
    txtNote: ''
  }

  constructor(private footballService: FootballService, private dialog: MdDialog) { }

  ngOnInit() {

  }

  sumbitMyNote(): Boolean {
    if (this.data.txtNote != '' && this.data.txtNote) {
      this.footballService.saveNote(this.data.txtNote);
      this.dialog.closeAll();
      return true;
    } else {
      return false;
    }
  }

}
