import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//app components
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { AlunoCrudComponent } from './views/aluno-crud/aluno-crud.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { AlunoAutocompleteComponent } from './components/aluno/aluno-autocomplete/aluno-autocomplete.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { ProfissaoComponent } from './components/profissao/profissao.component';
import { EscolaridadeComponent } from './components/escolaridade/escolaridade.component';
import { SexoComponent } from './components/sexo/sexo.component';
import { EstadoCivilComponent } from './components/estado-civil/estado-civil.component';
import { ResponsavelCrudComponent } from './views/responsavel-crud/responsavel-crud.component';
import { ResponsavelCreateComponent } from './components/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelReadComponent } from './components/responsavel/responsavel-read/responsavel-read.component';
import { CursosReadComponent } from './components/curso/cursos-read/cursos-read.component';
import { CursoCrudComponent } from './views/curso-crud/curso-crud.component';
import { CursoAutocompleteComponent } from './components/curso/curso-autocomplete/curso-autocomplete.component';
import { ContratoCrudComponent } from './views/contrato-crud/contrato-crud.component';
import { ContratoCreateComponent } from './components/contrato/contrato-create/contrato-create.component';
import { SelecionaModuloComponent } from './components/curso/curso-autocomplete/seleciona-modulo/seleciona-modulo.component';
import { ExibeModulosComponent } from './components/curso/exibe-modulos/exibe-modulos.component';
import { ResponsavelAutocompleteComponent } from './components/responsavel/responsavel-autocomplete/responsavel-autocomplete.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AlunoCrudComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    EnderecoComponent,
    ProfissaoComponent,
    EscolaridadeComponent,
    SexoComponent,
    EstadoCivilComponent,
    ResponsavelCreateComponent,
    ResponsavelCrudComponent,
    ResponsavelReadComponent,
    CursosReadComponent,
    CursoAutocompleteComponent,
    CursoCrudComponent,
    ContratoCrudComponent,
    ContratoCreateComponent,
    AlunoAutocompleteComponent,
    SelecionaModuloComponent,
    ExibeModulosComponent,
    ResponsavelAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatChipsModule,
    MatBadgeModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
