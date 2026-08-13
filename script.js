// ====== EDIT THESE 3 VALUES BEFORE PUBLISHING ======
const CONTACT_EMAIL = "naveelhussain5639@gmail.com";
const WHATSAPP_NUMBER = "923310412372"; // digits only, country code included
const DISPLAY_PHONE = "+92 331 0412372 / +92 974 30832618";
// ===================================================

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailDisplay").textContent = CONTACT_EMAIL;
document.getElementById("phoneDisplay").textContent = DISPLAY_PHONE;

const waText = encodeURIComponent("Hello, I am interested in your Pakistan wood sawdust / wood shavings products. Please send me your specification and CIF quotation.");
document.getElementById("whatsappLink").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
}));

document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("product").value = link.dataset.product;
  });
});

document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    country: document.getElementById("country").value,
    product: document.getElementById("product").value,
    quantity: document.getElementById("quantity").value,
    terms: document.getElementById("terms").value,
    message: document.getElementById("message").value
  };
  const subject = `Wood Sawdust Quote Request - ${data.company || data.name}`;
  const body =
`Hello Pak Wood Sawdust Exports,

I would like a quotation.

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
WhatsApp/Phone: ${data.phone}
Country: ${data.country}
Product: ${data.product}
Quantity: ${data.quantity}
Terms: ${data.terms}

Requirement:
${data.message}

Please send your product specification, available packaging and quotation.`;

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
