import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule, // Add MatInputModule here
    MatButtonModule, // Add MatButtonModule here
    MatSelectModule, // Add MatSelectModule here
    MatFormFieldModule, // Add MatFormFieldModule here
    MatIconModule, // Add MatIconModule here
    MatCardModule, // Add MatCardModule here
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
