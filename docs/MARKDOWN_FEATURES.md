# Markdown Enhancement Features

This document describes the newly added markdown enhancement features in Spaceship.

## 🎨 Shiki Code Highlighting

### Features

- **Syntax highlighting** with dual themes (light/dark)
- **Line highlighting** using special comments
- **Diff highlighting** for showing code changes
- **Word highlighting** for emphasizing specific terms

### Usage

#### Basic code block

\`\`\`javascript
function hello() {
console.log('Hello, World!');
}
\`\`\`

#### Line highlighting

\`\`\`javascript
function greet(name) {
console.log(\`Hello, \${name}!\`); // [!code highlight]
return name;
}
\`\`\`

#### Diff highlighting

\`\`\`javascript
function calculate(x, y) {
return x - y; // [!code --]
return x + y; // [!code ++]
}
\`\`\`

#### Word highlighting

\`\`\`javascript
// The word "important" will be highlighted
const important = "value"; // [!code word:important]
\`\`\`

---

## 🔗 Heading Anchor Links

All headings (H1-H6) automatically get clickable `#` links.

**How it works:**

- Hover over any heading to see the `#` symbol
- Click to get a direct link to that section
- Perfect for sharing specific parts of posts

---

## 🌐 External Link Security

All external links automatically get security attributes:

- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Prevents security vulnerabilities

**Example:**
\`\`\`markdown
[Astro Docs](https://docs.astro.build)
\`\`\`

Becomes:
\`\`\`html
<a href="https://docs.astro.build" 
   target="_blank" 
   rel="noopener noreferrer">
Astro Docs
</a>
\`\`\`

---

## 😎 Emoji Support

Use GitHub-style emoji shortcodes in your markdown!

**Examples:**

- `:rocket:` → 🚀
- `:fire:` → 🔥
- `:tada:` → 🎉
- `:sparkles:` → ✨
- `:zap:` → ⚡

---

## 📊 Mermaid Diagrams

Create diagrams and flowcharts using Mermaid syntax.

### Usage in MDX

\`\`\`mdx
import Mermaid from '@/components/Mermaid.svelte';

<Mermaid client:load chart={\`
graph TD
A[Start] --> B{Decision}
B -->|Yes| C[Action 1]
B -->|No| D[Action 2]
C --> E[End]
D --> E
\`} />
\`\`\`

### Example Diagrams

#### Flowchart

\`\`\`mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
\`\`\`

#### Sequence Diagram

\`\`\`mermaid
sequenceDiagram
participant Alice
participant Bob
Alice->>John: Hello John, how are you?
loop HealthCheck
John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
\`\`\`

#### Gantt Chart

\`\`\`mermaid
gantt
title A Gantt Diagram
dateFormat YYYY-MM-DD
section Section
A task :a1, 2024-01-01, 30d
Another task :after a1 , 20d
section Another
Task in sec :2024-01-12 , 12d
another task : 24d
\`\`\`

---

## 📝 Usage Tips

### Best Practices

1. **Code blocks**: Always specify the language for proper syntax highlighting
2. **Emojis**: Use sparingly for emphasis, not decoration
3. **Diagrams**: Keep them simple and focused
4. **External links**: Let the plugin handle security attributes

### Performance

- Mermaid diagrams are rendered client-side
- Theme switches automatically (dark/light)
- Code highlighting is done at build time (fast!)

---

## 🔧 Configuration

All settings are in `astro.config.mjs`:

\`\`\`javascript
export default defineConfig({
markdown: {
shikiConfig: {
themes: { light: 'github-light', dark: 'github-dark' },
transformers: [...],
},
remarkPlugins: [remarkEmoji],
rehypePlugins: [rehypeAutolinkHeadings, rehypeExternalLinks],
},
});
\`\`\`
