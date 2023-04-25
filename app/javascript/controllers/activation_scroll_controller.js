import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="activation-scroll"
export default class extends Controller {
  static targets = ["accueil", "portfolio", "moi"]

  connect() {
    this.accueilTarget.classList.add("active")
  }

  activation(event) {
    this.accueilTarget.classList.remove("active")
    this.portfolioTarget.classList.remove("active")
    this.moiTarget.classList.remove("active")
    event.currentTarget.classList.add("active")
  }
}
