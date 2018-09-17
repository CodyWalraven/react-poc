export class AppStore {
  constructor(token){
    this.token = token
  }

  get client_token(){
    if (this.token === undefined){
      return undefined
    }
    else{
      return this.token
    }
  }

  set client_token(input){
    this.token = input
  }

}