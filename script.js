document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.parallax-container');
  const items = document.querySelectorAll('.product-item');
  
  // Set initial positions
  items.forEach((item, index) => {
    const angle = (index / items.length) * 2 * Math.PI;
    const radius = 200;
    
    item.style.transform = `
      translate3d(
        ${Math.cos(angle) * radius}px,
        ${Math.sin(angle) * radius}px,
        0
      )
    `;
  });

  // Parallax effect on scroll
  let scrollPosition = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const delta = currentScroll - scrollPosition;
    scrollPosition = currentScroll;
    
    items.forEach((item, index) => {
      const rotation = parseFloat(item.dataset.rotation || 0);
      const newRotation = rotation + (delta * 0.1);
      item.dataset.rotation = newRotation;
      
      const angle = (newRotation + (index / items.length) * 360) * (Math.PI / 180);
      const radius = 200;
      
      item.style.transform = `
        translate3d(
          ${Math.cos(angle) * radius}px,
          ${Math.sin(angle) * radius}px,
          0
        )
      `;
    });
  });
});