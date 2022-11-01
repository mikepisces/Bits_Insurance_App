// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../model/User ';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpClientService {

//   constructor(
//     private httpClient:HttpClient
//   ) { }

//   getUsers()
//   {
//     console.log("test call");
//     return this.httpClient.get<User[]>('http://localhost:8080/users/get');
//   }

//   addUser(newUser: User) {
//     return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
//   }

//   deleteUser(id) {
//     return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
//   }

//   // getFlavours() {
//   //   return this.httpClient.get<Flavour[]>('http://localhost:8080/flavours/get');
//   // }

//   // addFlavour(newFlavour: Flavour) {
//   //   return this.httpClient.post<Flavour>('http://localhost:8080/flavours/add', newFlavour);
//   // }

//   // deleteFlavour(id) {
//   //   return this.httpClient.delete<Flavour>('http://localhost:8080/flavours/' + id);
//   // }

//   // updateFlavour(updatedFlavour: Flavour) {
//   //   return this.httpClient.put<Flavour>('http://localhost:8080/flavours/update', updatedFlavour);
//   // }

//   // getIngredients() {
//   //   return this.httpClient.get<Ingredient[]>('http://localhost:8080/ingredients/get');
//   // }

//   // addIngredient(newIngredient: Ingredient) {
//   //   return this.httpClient.post<Ingredient>('http://localhost:8080/ingredients/add', newIngredient);
//   // }

//   // deleteIngredient(id) {
//   //   return this.httpClient.delete<Ingredient>('http://localhost:8080/ingredients/' + id);
//   // }

//   // updateIngredient(updatedIngredient: Ingredient) {
//   //   return this.httpClient.put<Ingredient>('http://localhost:8080/ingredients/update', updatedIngredient);
//   // }
// }



