class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }   
    connectedCallback(){
      this.render();
    }   
    render() {
      this.shadowDOM.innerHTML = `
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center; 
            background-color: #B7C4CF;
            color: white;
            float: center;
          }
          h2 {
            padding: 15px;
          }
        }
        </style>

        <h2>Jelajah Kuliner</h2>
      `;
    }
}
customElements.define('app-bar', AppBar);