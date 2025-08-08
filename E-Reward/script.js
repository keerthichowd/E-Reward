document.addEventListener("DOMContentLoaded", () => {
  // Ripple & scale for buttons
  document.querySelectorAll(".btn, .btn-outline").forEach(btn => {
    btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      circle.className = "ripple";
      const rect = btn.getBoundingClientRect();
      circle.style.left = (e.clientX - rect.left) + "px";
      circle.style.top = (e.clientY - rect.top) + "px";
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 400);
      btn.style.transform = "scale(0.94)";
      setTimeout(() => btn.style.transform = "scale(1)", 120);
    });
  });

  // Modal handler for actions
  function createModal(title, type) {
    if (document.querySelector(".modal-bg")) document.querySelector(".modal-bg").remove();
    const modalBg = document.createElement("div");
    modalBg.className = "modal-bg";
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close modal">×</button>
      <h2 style="margin-bottom:1rem;">${title}</h2>
      <form class="modal-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        ${type === "signup" ? '<input type="password" placeholder="Confirm Password" required />' : ''}
        <button class="btn" type="submit">${title}</button>
      </form>
    `;
    modalBg.appendChild(modal);
    document.body.appendChild(modalBg);
    setTimeout(() => modalBg.classList.add("show"), 20);

    modalBg.querySelector(".modal-close").onclick = () => modalBg.classList.remove("show");
    modalBg.onclick = e => { if (e.target === modalBg) modalBg.classList.remove("show"); };
    modalBg.addEventListener("transitionend", () => { if (!modalBg.classList.contains("show")) modalBg.remove(); });

    modal.querySelector("form").onsubmit = e => {
      e.preventDefault();
      alert(`${title} successful (demo)!`);
      modalBg.classList.remove("show");
    };
  }

  document.getElementById("hero-signup").addEventListener("click", e => {
    e.preventDefault(); createModal("Sign Up", "signup");
  });
  document.querySelectorAll(".customer-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Sign Up", "signup");
    });
  });
  document.querySelectorAll(".customer-signin-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Sign In", "login");
    });
  });
  document.querySelectorAll(".company-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Join Network", "signup");
    });
  });
  document.querySelectorAll(".company-login-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Company Login", "login");
    });
  });
  document.querySelectorAll(".nav-login").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Login", "login");
    });
  });
  document.querySelectorAll(".nav-signup").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Sign Up", "signup");
    });
  });
  document.querySelectorAll(".reward-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); createModal("Redeem Reward", "login");
    });
  });
});
