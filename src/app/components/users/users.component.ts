import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { PERSONAS_DATA } from '../../mock/data.mock';
import {MatTableModule} from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Iuser } from '../../models/Iuser.interface';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatSlideToggleModule,MatButtonModule,MatTableModule,MatIconModule,MatToolbarModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
_userService = inject(UsersService)
DataUsers: Iuser[] =[]// PERSONAS_DATA
showTable:boolean = false
displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Telefono'];


SearchUsers(){
  this.showTable = true
  this.getProducts()
  this.getusers()
}

getusers(){
  this._userService.getUsers().subscribe({
    next: (users:Iuser[])=>{
      this.DataUsers = users
    },
    error :(e) =>{
      console.log("Error al consultar usuarios  retorna datos del mock",e)
      this.DataUsers = PERSONAS_DATA
    },
    complete:() =>{
      console.log('complete')
    }
  })
}

getProducts(){
  console.log('en productos')
  this._userService.getProducts().subscribe((res:any)=>{
    console.log(res, 'prodcutos')
  })
}
}

