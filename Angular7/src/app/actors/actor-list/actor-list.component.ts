import { ActorService } from './../../shared/actor.service';
import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/actor.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private service: ActorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  // Update the form with what record was clicked on
  populateForm(actor: Actor) {
    this.service.formData = Object.assign({}, actor);
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.service.deleteActor(id).subscribe(result => {
        this.service.refreshList();
        this.toastr.info('Deleted successfully', 'Actor Registration')
      });
    }
  }
}
