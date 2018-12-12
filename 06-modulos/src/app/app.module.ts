import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EmpresaModule, UsuarioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
