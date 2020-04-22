import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './lsy.reducer';

@NgModule({
  imports: [StoreModule.forFeature('lsy', counterReducer)],
})
export class ScoreboardModule {}
