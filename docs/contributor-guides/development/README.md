# Developer Contribution Guide

Welcome to the repository! Here’s how you can contribute to developing and enhancing the static website.

---

## 1. Project Overview

The static website is a Next.js application located in the `/website` directory. It leverages Material UI React components for its user interface and uses MDX for writing content.

---

## 2. Setting Up the Project

### Prerequisites

***Note:*** *All prerequisites are accounted for if using the included development container.*

- Install **Node.js** (v14 or later) and **npm** (Node Package Manager).
- Have **Git** installed and configured.

### Steps
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Navigate to the `/website` directory:
   ```bash
   cd website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
To start the development server:
```bash
npm run dev
```
The website will be available at `http://localhost:3000`.

---

## 3. Adding or Editing Content

### Writing Content in MDX
All content is written in **MDX** (Markdown + JSX). Follow these steps to create or update content:
1. Locate the appropriate file in the `/website/pages` directory.
2. Create a new `.mdx` file for new content or edit an existing one.
3. Write your content using Markdown and embed React components as needed. For example:
   ```mdx
   # Welcome to the Website!

   This is a static website powered by **Next.js** and **Material UI**.

   <Button variant="contained" color="primary">Click Me!</Button>
   ```

### Previewing Changes
Save your changes and refresh the browser to see your updates in the local development server.

---

## 4. Contributing Components

### Using Material UI
Material UI is used for designing React components. Follow these steps to add or update components:
1. Navigate to the `/website/src/components` directory.
2. Add or update React components using Material UI primitives. Example:
   ```tsx
   import React from 'react';
   import Button from '@mui/material/Button';

   export const MyButton = () => (
     <Button variant="contained" color="secondary">
       Click Me
     </Button>
   );
   ```

3. Import the new component into the appropriate MDX file or Next.js page.

---

## 5. Creating a Pull Request

### Branching Strategy
1. Create a new branch for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Committing Changes
1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit your changes with a meaningful message:
   ```bash
   git commit -m "Add new feature or fix [describe changes briefly]"
   ```

### Submitting the Pull Request
1. Push your branch to the remote repository:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Open a pull request in the repository and provide a clear description of your changes.

---

## 6. Code Style and Quality

- Use **Prettier** to format code consistently.
- Follow existing conventions for naming files and components.
- Write clear and concise comments where necessary.

---

## 7. Documentation and Testing

- Update **README.md** or relevant docs if your changes affect functionality.
- Test your changes thoroughly to ensure they work as expected.

---

By following these steps, you’ll be able to contribute effectively to the static website project. Happy coding, and thank you for your contributions!