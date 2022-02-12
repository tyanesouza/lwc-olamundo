import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //posso criar variaveis, atributos
  nome ="Cristiane Silveira";
  telefone = "11-9888885555";
  cpf ="55525525225";
  idade= "42 anos";
  ig ="@amordeinstantes";
  email = "ttiane2003@yahoo.com.br";
  link = "cristianessouza";
  google = "https://www.google.com";
 
 
 visible  = true;
//uso de variavel da classe dentre os metodos
//this.variavel
trocarDiv(){
//this.visible = !this.visible;

if(this.visible==true)
this.visible =false;
else{
this.visible =true;
  }
}



alteraValores(){


  this.nome ="maria";
  this.telefone = "11-9888885555";
  this.cpf ="ammm";
  this.idade= "30";
  this.ig ="@salesforce";
  this.email = "tiaiamma@mmmam";
  this.link = "crifjjf";
  
 
}
}
