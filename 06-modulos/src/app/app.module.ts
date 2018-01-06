import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmpresaModule } from './empresa/empresa.module';
import { UsuarioModule } from './usuario/usuario.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EmpresaModule, UsuarioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
