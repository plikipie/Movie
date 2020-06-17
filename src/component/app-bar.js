class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <h1 class="text-white text-center"><strong>MOVIE LIBRARY</strong></h1>`;
  }
}

customElements.define("app-bar", AppBar);
