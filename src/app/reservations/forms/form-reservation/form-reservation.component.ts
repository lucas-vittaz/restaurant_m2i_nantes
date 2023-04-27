import { Component, EventEmitter, Input,ViewChild, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../models/reservation';
import { Restaurant } from 'src/app/restaurants/models/restaurant';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.scss']
})
export class FormReservationComponent {

  public form!: FormGroup;
  @Input() public  init!: Reservation;
  @Input() public restaurantId!: number;
  @Output() public submitted = new EventEmitter<Reservation>();
  @ViewChild('myForm') myForm: any;
  @ViewChild('success')  success: any;

  constructor(private formBuilder: FormBuilder ){

    this.myForm = document.getElementsByTagName('form');
  }


  ngOnInit(): void {

   this.form = this.formBuilder.group({
    
    id: [this.init.id ],
    
    nom: [this.init.nom, Validators.required],
    
    prenom: [this.init.prenom],
    
    telephone: [this.init.telephone, Validators.required],
    
    dateHeureDebut: [this.init.dateHeureDebut, Validators.required],
    
    restaurantId: [this.init.restaurantId, Validators.required],
    
     });

    }
    

    public onSubmit(): void {

       this.submitted.emit(this.form.value);
      
      
       this.myForm.nativeElement.style.display = 'none';
       this.success.nativeElement.style.display = 'block';
      
    }



}
