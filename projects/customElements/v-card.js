window.customElements.define(
  "v-card",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["name"];
    }
    name = "World";
    set name(value) {
      this.setAttribute("name", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      console.log(`<h1>Hello ${this.name}</h1>`)
      this.innerHTML = `<h1>Hello ${this.name}</h1>`;
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      this.render();
      if (attr === "name") {
        this.dispatchEvent(
          new CustomEvent("name-change", {
            detail: `name has changes from ${oldValue} to ${newValue}`,
          })
        );
      }
    }
  }
);

custormElementRegistry = {
  'v-card':  class extends HTMLElement {
    static get observedAttributes() {
      return ["name"];
    }
    name = "World";
    set name(value) {
      this.setAttribute("name", value);
    }
    get name() {
      return this.getAttribute("name");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      console.log(`<h1>Hello ${this.name}</h1>`)
      this.innerHTML = `<h1>Hello ${this.name}</h1>`;
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      this.render();
      if (attr === "name") {
        this.dispatchEvent(
          new CustomEvent("name-change", {
            detail: `name has changes from ${oldValue} to ${newValue}`,
          })
        );
      }
    }
  },
}
