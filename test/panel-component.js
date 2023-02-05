
class PanelComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.innerHTML = `
            <style>
                section {
                    border: 1px solid darkgray;
                    border-radius: 10px;
                }
                h3 {
                    margin: 0;
                    color: white;
                    background-color: darkgray;
                    padding: 5px 10px;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .body {
                    padding: 10px;
                }
                p {
                    margin: 30px 0 0;
                }
                code {
                    color: lightblue;
                }
            </style>
          <section>
              <h3>
                <slot name="heading"></slot>
              </h3>
              <div class="body">
                <slot name="body"></slot>
                <p><code>[D]</code> Part of a webcomponent</p>
              </div>
          </section>
        `;
    }
}
window.customElements.define('panel-component', PanelComponent);