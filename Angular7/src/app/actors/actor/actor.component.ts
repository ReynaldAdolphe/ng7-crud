import { Actor } from 'src/app/shared/actor.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActorService } from './../../shared/actor.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private service : ActorService,
              private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form !=null)
      form.resetForm();
    this.service.formData={
      Id: null,
      Name:null,
      Age: null,
      AcademyWinner: null
    }
  }

  onSubmit(form: NgForm){
    if(form.value.Id==null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  updateRecord(form: NgForm): any {
    this.service.putActor(form.value).subscribe(res => {
      this.toastr.warning('Updated successfully', 'Actor Registration')
      this.resetForm(form);
      this.service.refreshList();
    })
  }

  insertRecord(form: NgForm){
    this.service.postActor(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Actor Registration')
      this.resetForm(form);
      this.service.refreshList();
    })
  }
}
