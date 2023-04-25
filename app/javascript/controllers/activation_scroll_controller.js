import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="activation-scroll"
export default class extends Controller {
  static targets = ["accueil", "portfolio", "moi"]

  connect() {
    this.accueilTarget.classList.add("active")
  }

  activation() {
    this.currentTarget.classList.add("active")
  }
}
