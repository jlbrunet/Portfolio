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

    let className = event.currentTarget.dataset.reference
    let element = document.querySelector(className)
    element.scrollIntoView({behavior: "smooth"})
  }

  scrolling(event) {
    let homepage = this.element.querySelector(".homepage-scrollable")
    let positionHomepage = homepage.scrollTop

    let portfolio = document.querySelector(".portfolio-container")
    let positionPortfolio = portfolio.offsetTop

    let whoiam = document.querySelector(".whoiam")
    let positionWhoiam = whoiam.offsetTop

    if (positionHomepage >= positionWhoiam) {
      this.accueilTarget.classList.remove("active")
      this.portfolioTarget.classList.remove("active")
      this.moiTarget.classList.add("active")
    } else if (positionHomepage >= positionPortfolio) {
      this.accueilTarget.classList.remove("active")
      this.portfolioTarget.classList.add("active")
      this.moiTarget.classList.remove("active")
    } else {
      this.accueilTarget.classList.add("active")
      this.portfolioTarget.classList.remove("active")
      this.moiTarget.classList.remove("active")
    }
  }
}
