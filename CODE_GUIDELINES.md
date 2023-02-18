# 📝 Code Guidelines

## General Guidelines

- Use descriptive and meaningful names for all variables, functions, and classes.
- Write comments to explain code that may not be immediately clear.
- Keep lines of code to a reasonable length (80 characters or less).
- Use proper indentation to improve code readability.
- Avoid unnecessary code duplication.
- Use consistent coding style and formatting throughout the project.

## Angular-Specific Guidelines

- Follow the Angular style guide for naming conventions and code structure.
- Use Angular CLI for generating components, services, and other Angular artifacts.
- Use reactive forms instead of template-driven forms for better maintainability and testability.
- Use declarative programming paradigm and avoid imperative style where possible.
- Use the "OnPush" change detection strategy to optimize performance and reduce unnecessary rendering.
- Use RxJS for managing asynchronous data streams and handling events.
- Prefer usage of pipes to transform data in a declarative and efficient way.

## Branch Naming Convention

- For bug fixes, use **fix/{issue-number}-description-of-fix**.
- For new features, use **feat/{issue-number}-description-of-feature**.
- For refactoring or code cleanup, use **refactor/{issue-number}-description-of-refactor**.
- For documentation changes, use **doc/{issue-number}-description-of-change**.

## Pull Request Workflow

- Create a branch for your work based on the latest main branch.
- Use the branch naming convention described above.
- Assign at least two reviewers to review your pull request.
- Once the review process is complete, merge your branch into the main branch.
- Delete your branch after merging.

If anything in these guidelines is unclear or if you have feedback, please don't hesitate to let us know! We're always looking to improve our practices and make the project better for everyone. 🤝
