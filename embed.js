document.addEventListener('DOMContentLoaded', function() {
    const aiTags = document.querySelectorAll('[ai]');
    aiTags.forEach(tag => {
      tag.outerHTML = `<span style="font-style: italic;">${tag.innerHTML} <sup>✨</sup></span>`;
    });
  
    // Add footer disclaimer
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>*Information italicized with a ✨ notation denotes text that was created wholly or partially by Artificial Intelligence.</p>';
    document.body.appendChild(footer);
  });