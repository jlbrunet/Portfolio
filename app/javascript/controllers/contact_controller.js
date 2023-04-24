import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

// Connects to data-controller="contact"
export default class extends Controller {
  static targets = ["contact_button", "contact_infos"]

  connect() {
  }

  modal() {
    this.contact_buttonTarget.classList.add("d-none")
    this.contact_infosTarget.classList.remove("d-none")
  }
}
