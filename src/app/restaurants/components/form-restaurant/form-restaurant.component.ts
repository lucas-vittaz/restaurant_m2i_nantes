import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TypeRestaurant } from 'src/app/type-restaurant/models/type-restaurant';
import { TypeRestaurantService } from 'src/app/type-restaurant/services/type-restaurant.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.scss'],
})
export class FormRestaurantComponent {
  public form!: FormGroup;
  @Input() public init!: Restaurant;
  // @Input() public restaurantId!: number;
  @Output() public submitted = new EventEmitter<Restaurant>();
  @ViewChild('myForm') myForm: any;
  @ViewChild('success') success: any;
  @ViewChild('btn') btn: any;
  public collection$: BehaviorSubject<TypeRestaurant[]>;
  

  constructor(
    private formBuilder: FormBuilder,
    private typeRestaurantService: TypeRestaurantService
  ) {
    this.myForm = document.getElementsByTagName('form');
    this.collection$ = this.typeRestaurantService.collection$;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // id: [this.init.id],
      nom: [this.init.nom, Validators.required],
      adresse: [this.init.adresse],
      typeId: [this.init.typeId, Validators.required],
      prix: [this.init.prix, Validators.required],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
    // this.myForm.nativeElement.style.display = 'none';
    // this.success.nativeElement.style.display = 'block';
    // this.btn.nativeElement.style.display = 'block';
    console.log(this.form.value);
  }
}
