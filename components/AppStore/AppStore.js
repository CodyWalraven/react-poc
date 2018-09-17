export class AppStore {
  constructor(token) {
    this.token = token
    this.refresh = true
  }

  get client_token() {
    if (this.token === undefined) {
      return undefined
    } else {
      return this.token
    }
  }

  set client_token(input) {
    this.token = input
  }

  //Asset ID getter and setter
  set asset_id(id) {
    this.assetID = id
  }
  get asset_id() {
    return this.assetID
  }

  get image_id() {
    return this.image_id
  }

  set image_id(id) {
    this.image_id = id
  }

  get primary_default() {
    return this.primary_default
  }

  set primary_default(id) {
    this.primary_default = id
  }

  get secondary_default() {
    return this.secondary_default
  }

  set secondary_default(id) {
    this.secondary_default = id
  }
}
