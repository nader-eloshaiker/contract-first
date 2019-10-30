import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../models/pet';

@Component({
  selector: 'app-pet-find',
  templateUrl: './pet-find.component.html',
  styleUrls: ['./pet-find.component.scss']
})
export class PetFindComponent implements OnInit {
  private _searchResult: string;

  public readonly searchForm: FormGroup;
  public readonly fieldPetId;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _petService: PetService
  ) {
    this.fieldPetId = new FormControl('', [Validators.required]);
    this.searchForm = _formBuilder.group({
      petId: this.fieldPetId
    });
  }

  get searchResult() {
    return this._searchResult;
  }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    const searchFields = Object.assign({}, this.searchForm.value);

    this._petService.getPetById(searchFields.petId).subscribe((next: Pet) => this._searchResult = JSON.stringify(next));
  }

}
