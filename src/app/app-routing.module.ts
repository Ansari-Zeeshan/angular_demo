import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { AccordianComponent } from './accordian/accordian.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { StyleThingsComponent } from './style-things/style-things.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { SendingDataComponent } from './sending-data/sending-data.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { BrowserSpecificComponent } from './browser-specific/browser-specific.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { RowTableComponent } from './row-table/row-table.component';
import { ToggleTableComponent } from './toggle-table/toggle-table.component';


const routes: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'todolist', component: TodoListComponent},
  {path: 'pipecomp', component: PipecompComponent},
  {path: 'accordian', component: AccordianComponent},
  {path: 'ifelse', component: IfelseComponent},
  {path: 'stylethings', component: StyleThingsComponent},
  {path: 'hideshow', component: HideShowComponent},
  {path: 'sendingdata', component: SendingDataComponent},
  {path: 'gridlayout', component: GridLayoutComponent},
  {path: 'showmessage', component: ShowMessageComponent},
  {path: 'browserspecific', component: BrowserSpecificComponent},
  {path: 'parentcomp', component: ParentCompComponent},
  {path: 'rowtable', component: RowTableComponent},
  {path: 'toggletable', component: ToggleTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
