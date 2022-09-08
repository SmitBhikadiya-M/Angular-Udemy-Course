import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode: boolean = false;
  paramSubscription: Subscription;
  recipeForm : FormGroup;
  
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  private initForm(){

    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, { validators: [Validators.required] }),
      'imgUrlPath': new FormControl(recipeImgPath, { validators: [Validators.required] }),
      'recipeDescription': new FormControl(recipeDescription, { validators: [Validators.required] }),
      'recipeIngredients': recipeIngredients
    })
  }

  onSubmit(){
    console.log( this.recipeForm.value );
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  get getIngredients(){
    return (<FormArray> this.recipeForm.get('recipeIngredients')).controls;
  }

}
