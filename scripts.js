document.addEventListener("DOMContentLoaded", function() {
    const textSpans = document.querySelectorAll('.animated-text span');
    textSpans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });
});
