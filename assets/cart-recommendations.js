class CartDrawerRecommendations extends HTMLElement {
  constructor() {
    super();
    this.recommendationsContainer = this.querySelector(".recommended-products-grid"),
    this.baseUrl = this.dataset.baseUrl;
  }

  connectedCallback() {
            this.loadRecommendations(),
    document.addEventListener("cart:updated", () => this.loadRecommendations());
  }

  async loadRecommendations() {
    this.recommendationsContainer = this.querySelector(".recommended-products-grid");
    this.baseUrl = this.dataset.baseUrl;

    if (!this.recommendationsContainer) {
      return;
    }

    try {
      const cart = await (await fetch("/cart.js")).json();

      if (!cart.items.length) {
        this.recommendationsContainer.innerHTML = "";
        this.style.display = "none";
        return;
      }

      const productId = cart.items[0].product_id;
      const url = `${this.baseUrl}&product_id=${productId}`;
      const response = await fetch(url);
      const htmlString = await response.text();

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlString;
      const recommendations = tempDiv.querySelector(".recommended-products-grid");

      if (recommendations && recommendations.innerHTML.trim()) {
        this.recommendationsContainer.innerHTML = recommendations.innerHTML;
        this.style.display = "block";
      } else {
        this.recommendationsContainer.innerHTML = "";
        this.style.display = "none";
      }
    } catch (error) {
      this.recommendationsContainer.innerHTML = "";
      this.style.display = "none";
    }
  }
}

customElements.define("cart-drawer-recommendations", CartDrawerRecommendations);
