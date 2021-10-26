import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxNotifierService } from 'ngx-notifier';
import { UserDTOModel } from '../DTOs/UserDTO.model';
import { UserApiService } from '../pages/user-pages/user.service';
import CEPAPIService from '../services/CEPAPIService';



@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  id?: number;
  passwordVisibledShow: boolean = false;

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.email, Validators.required, Validators.maxLength(150)]],
    password: ['', []],
    phone: ['', [Validators.minLength(9)]],
    cpf: ['', [Validators.minLength(11)]],
    birth: ['', [Validators.required]],
    postcode: ['', [Validators.required, Validators.minLength(8)]],
    st: ['', [Validators.minLength(2), Validators.maxLength(2)]],
    city: ['', [Validators.maxLength(150)]],
    neighborhood: ['', [Validators.maxLength(150)]],
    street: ['', [Validators.maxLength(150)]],
    number: ['', ],
    passwordVisibled: ['', ],
  });
  
  constructor(private userService: UserApiService, private formBuilder: FormBuilder,  private route: Router, private actRoute: ActivatedRoute, private ngxNotifierService: NgxNotifierService, private CEPAPIServive: CEPAPIService) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((res) => {
      if(res.id != undefined){
        this.id = res.id;
        this.edit();
        this.passwordVisibledShow = true;
      }
    });
  }

  checkPostCode(event: any){
    if(this.form.value.postcode.length == 8){
      this.CEPAPIServive.load(this.form.value.postcode).subscribe(
        (response) => {
          if(!response.erro){
            console.log(response);
            this.form.controls['st'].setValue(response.uf);
            this.form.controls['city'].setValue(response.localidade);
            this.form.controls['neighborhood'].setValue(response.bairro);
            this.form.controls['street'].setValue(response.logradouro);
          }
        });
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  edit(){
    this.userService.edit(this.id as number).subscribe(
      (response) => {
        this.fill(response);
      }, err => {
        console.log(err);
      });
  }

  fill(data: any){
    this.form.controls['name'].setValue(data.name);
    this.form.controls['email'].setValue(data.email);
    //this.form.controls['password'].setValue(data.password);
    this.form.controls['cpf'].setValue(data.cpf);
    this.form.controls['phone'].setValue(data.ddd+data.phone);
    this.form.controls['birth'].setValue(data.birth);
    this.form.controls['postcode'].setValue(data.address.postcode);
    this.form.controls['st'].setValue(data.address.st);
    this.form.controls['city'].setValue(data.address.city);
    this.form.controls['neighborhood'].setValue(data.address.neighborhood);
    this.form.controls['street'].setValue(data.address.street);
    this.form.controls['number'].setValue(data.address.number);
    this.form.controls['passwordVisibled'].setValue(data.password);


  }

  save(){
    let userDTO = new UserDTOModel(this.form.value.name, this.form.value.email, this.form.value.password, this.form.value.cpf, this.form.value.phone.substring(0, 2), this.form.value.phone.substring(2, 11), this.form.value.birth, 
      this.form.value.postcode, this.form.value.st, this.form.value.city, this.form.value.neighborhood, this.form.value.street, this.form.value.number, this.id);

    if(this.id != undefined){
      this.update(userDTO);
    } else {
      this.new(userDTO);
    }
	}

  new(userDTO: UserDTOModel){
    this.userService.store(userDTO).subscribe(
      (response) => {
        this.route.navigate(['user', '']); 
        this.ngxNotifierService.createToast('Usuário atualizado', 'success', 5000);
      }, err => {
        if(err.status == 422){
          let errors = Object.values(err.error.error);
          for(let i = 0; i < errors.length; i++){
            let error: any[] = errors[i] as any[];
            this.ngxNotifierService.createToast(error[0], 'danger', 5000);
          }
        } else if(err.status == 500){
          this.ngxNotifierService.createToast(err.error.error.message, 'danger', 5000);
        } else {
          this.ngxNotifierService.createToast('Erro desconhecido', 'danger', 5000);
        }
      });
  }

  update(userDTO: UserDTOModel){
    this.userService.update(userDTO, this.id as number).subscribe(
      (response) => {
        this.route.navigate(['user', '']);  
        this.ngxNotifierService.createToast('Usuário atualizado', 'success', 5000);
      }, err => {
        if(err.status == 422){
          let errors = Object.values(err.error.error);
          for(let i = 0; i < errors.length; i++){
            let error: any[] = errors[i] as any[];
            this.ngxNotifierService.createToast(error[0], 'danger', 5000);
          }
        } else if(err.status == 500){
          this.ngxNotifierService.createToast(err.error.error.message, 'danger', 5000);
        } else {
          this.ngxNotifierService.createToast('Erro desconhecido', 'danger', 5000);
        }
      });
  }

  back(){
    this.route.navigate(['user', '']);
	}

}
