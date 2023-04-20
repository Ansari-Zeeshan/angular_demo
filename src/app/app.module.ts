import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { InrtoUSDPipe } from './pipe/inrto-usd.pipe';
import { MakingBioPipe } from './pipe/making-bio.pipe';
import { MenubarComponent } from './menubar/menubar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { AccordianComponent } from './accordian/accordian.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { StyleThingsComponent } from './style-things/style-things.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { SendingDataComponent } from './sending-data/sending-data.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { ModalComponent } from './modal/modal.component';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { BootstrapSliderComponent } from './bootstrap-slider/bootstrap-slider.component';
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProductService } from './row-table/productservice';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import { CustomerService } from './row-table/customerservice';
import { BrowserSpecificComponent } from './browser-specific/browser-specific.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './parent-comp/child-comp/child-comp.component';
import { RowTableComponent } from './row-table/row-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChildComponent,
    FooterComponent,
    CalculatorComponent,
    InrtoUSDPipe,
    MakingBioPipe,
    MenubarComponent,
    TodoListComponent,
    PipecompComponent,
    AccordianComponent,
    IfelseComponent,
    StyleThingsComponent,
    HideShowComponent,
    SendingDataComponent,
    HomeCompComponent,
    GridLayoutComponent,
    ShowMessageComponent,
    ModalComponent,
    BootstrapSliderComponent,
    PrimengTableComponent,
    BrowserSpecificComponent,
    ParentCompComponent,
    ChildCompComponent,
    RowTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    ScrollingModule,
    ButtonModule,
    TableModule,
    ToastModule,
    RatingModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule
  ],
  providers: [ProductService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
