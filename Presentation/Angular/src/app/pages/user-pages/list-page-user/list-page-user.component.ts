import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApiService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-page-user',
  templateUrl: './list-page-user.component.html',
  styleUrls: ['./list-page-user.component.css']
})
export class ListPageUserComponent implements OnInit {
	
  users = [];

  columns: string[] = ['id', 'name', 'cpf', 'email', 'birth', 'action'];

  constructor(private userService: UserApiService, private p_ActRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
		this.userService.load().subscribe(
      (response) => {
        	this.users = response;
    });
	}

  create(){
    this.route.navigate(['user', 'form']);
	}

  delete(id: number){
    this.userService.destroy(id).subscribe(
      (response) => {
        this.load();
    });
	}

  edit(id: number){
    this.route.navigate(['user', 'form', id]);
	}

}
