import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeRestaurant } from '../../models/type-restaurant';
import { Router } from '@angular/router';
import { TypeRestaurantService } from '../../services/type-restaurant.service';

@Component({
  selector: 'app-form-add-type-restaurant',
  templateUrl: './form-add-type-restaurant.component.html',
  styleUrls: ['./form-add-type-restaurant.component.scss'],
})
export class FormAddTypeRestaurantComponent {
  public form!: FormGroup;
  @Input() public init!: TypeRestaurant;
  @Input() public title: string = 'Ajouter un type de restaurant';
  @Output() public submitted = new EventEmitter<TypeRestaurant>();

  constructor(
    private formBuilder: FormBuilder,
    private typeRestaurantService: TypeRestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: [this.init.nom, Validators.required],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
