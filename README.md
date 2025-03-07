# Synthgen Embed

![GitHub release (latest by date)](https://img.shields.io/github/v/release/synthgen-org/synthgen-embed?style=flat-square)
![GitHub license](https://img.shields.io/github/license/synthgen-org/synthgen-embed?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/synthgen-org/synthgen-embed?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/synthgen-org/synthgen-embed?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/synthgen-org/synthgen-embed?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/synthgen-org/synthgen-embed?style=flat-square)

Welcome to the **Synthgen Embed** repository! This project provides a lightweight JavaScript tool to help you mark and authenticate AI-generated content on your website. By using this embed, you can bring transparency to your content and build trust with your audience.

---

## Table of Contents
1. [What is Synthgen Embed?](#what-is-synthgen-embed)
2. [How It Works](#how-it-works)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## What is Synthgen Embed?

Synthgen Embed is a JavaScript tool that allows you to:
- **Mark AI-generated content**: Wrap AI-generated text in `[ai]` tags, and the script will automatically style it.
- **Add transparency**: Display a clear disclaimer to inform readers about AI-generated content.
- **Boost trust**: Show your commitment to transparency and innovation.

This tool is part of the [synthgen.org](https://synthgen.org) initiative to empower transparency in the AI era.

---

## How It Works

The Synthgen Embed script scans your website for `[ai]` tags and transforms them into styled, authenticated content. It also appends a footer disclaimer to your website, ensuring readers understand which content is AI-generated.

### Example
Before:
```html
<p>This is human-written text. [ai]This is AI-generated text.[/ai]</p>
```

After:
```html
<p>This is human-written text. <span style="font-style: italic;">This is AI-generated text. <sup>✨</sup></span></p>
<footer>
  <p>*Information italicized with a ✨ notation denotes text that was created wholly or partially by Artificial Intelligence.</p>
</footer>
```

---

## Getting Started

To use Synthgen Embed, follow these steps:

1. **Include the Script**:
   Add the following script tag to your website, just before the closing `</body>` tag:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/synthgen-org/synthgen-embed/embed.js"></script>
   ```

2. **Wrap AI-Generated Content**:
   Wrap any AI-generated text in `[ai]` tags. For example:
   ```html
   <p>This is human-written text. [ai]This is AI-generated text.[/ai]</p>
   ```

3. **Publish and Enjoy**:
   Once the script is embedded, it will automatically transform your `[ai]` tags and add a footer disclaimer.

---

## Usage

### Customization
Currently, the script applies default styling to AI-generated content. In future updates, we plan to add customization options for badges, watermarks, and more.

### Browser Support
Synthgen Embed works on all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

---

## Contributing

We welcome contributions to the Synthgen Embed project! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

For major changes, please open an issue first to discuss your ideas.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE.md) file for details.

---

## Contact

Have questions or need help? Feel free to reach out to us:
- **Email**: [support@synthgen.org](mailto:support@synthgen.org)
- **Website**: [https://synthgen.org](https://synthgen.org)
- **GitHub Issues**: [Open an issue](https://github.com/synthgen-org/synthgen-embed/issues) in this repository.

---

Thank you for using Synthgen Embed! Together, we can build a more transparent and trustworthy digital ecosystem. 🌟

