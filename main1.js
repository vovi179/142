onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Custom cursor effect
  document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = Math.random() * 10 + 10 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";
    heart.style.opacity = "0.8";
    heart.style.transition = "all 1s ease-out";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
};
