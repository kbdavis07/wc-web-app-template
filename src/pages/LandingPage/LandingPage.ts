export class LandingPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
            <main>
                <h1>Simplr Router Application Demo</h1>
                <h3>This demo consists of</h3>
                <ul>
                    <li>The use of a router outlet to display content</li>
                    <li>And external navigation component</li>
                    <li>Code splitting</li>
                    <li>Page transitions</li>
                    <li>Nested views</li>
                    <li>Dynamic views</li>
                    <li>And more!</li>
                </ul>
            </main>
        `;
        }
    }
}

customElements.define('landing-page', LandingPage);