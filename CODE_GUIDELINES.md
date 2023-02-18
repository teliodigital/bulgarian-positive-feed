# 📝 Code Guidelines

## 💻 General Guidelines

- Use descriptive and meaningful names for all variables, functions, and classes.
- Write comments to explain code that may not be immediately clear.
- Keep lines of code to a reasonable length (80 characters or less).
- Use proper indentation to improve code readability.
- Avoid unnecessary code duplication.
- Use consistent coding style and formatting throughout the project.

## 🅰️ Angular-Specific Guidelines

- Follow the Angular style guide for naming conventions and code structure.
- Use Angular CLI for generating components, services, and other Angular artifacts.
- Use reactive forms instead of template-driven forms for better maintainability and testability.
- Use declarative programming paradigm and avoid imperative style where possible.
- Use the "OnPush" change detection strategy to optimize performance and reduce unnecessary rendering.
- Use RxJS for managing asynchronous data streams and handling events.
- Prefer usage of pipes to transform data in a declarative and efficient way.

## 🌿 Branch Naming Convention

- For bug fixes, use **fix/{issue-number}-description-of-fix**.
- For new features, use **feat/{issue-number}-description-of-feature**.
- For refactoring or code cleanup, use **refactor/{issue-number}-description-of-refactor**.
- For documentation changes, use **doc/{issue-number}-description-of-change**.

## 💬 Commit Message Guidelines

- Use semantic tags for your commit messages in order to keep versioning up to date. Use the tag with ":" after the specific label
- Use imperative mood in the subject line of your commit message, e.g. **"fix: fix issue with broken link"**
- Avoid adding unnecessary details to the subject line, and use the body of the commit message to provide additional context if necessary

**Here are some guidelines for writing commit messages using the semantic-release convention:**


- **build**: Use this when you make changes to the build system, such as adding a new build tool or modifying the build configuration.
- **ci**: Use this when you make changes to the continuous integration (CI) system, such as adding a new job to the CI pipeline or modifying the configuration of an existing job.
- **docs**: Use this when you make changes to the documentation, such as adding new documentation or updating existing documentation.
- **feat**: Use this when you add a new feature to the codebase.
- **fix**: Use this when you fix a bug or issue in the code.
- **perf**: Use this when you make changes that improve the performance of the code, such as optimizing a piece of code or reducing the memory usage.
- **refactor**: Use this when you make changes to the code that do not add new features or fix bugs, but improve the code structure or readability.
- **test**: Use this when you add new tests to the codebase or modify existing tests.

## 🚪 Pull Request Workflow

- Create a branch for your work based on the latest main branch.
- Use the branch naming convention described above.
- Assign at least two reviewers to review your pull request.
- Once the review process is complete, merge your branch into the main branch.
- Delete your branch after merging.

If anything in these guidelines is unclear or if you have feedback, please don't hesitate to let us know! We're always looking to improve our practices and make the project better for everyone. 🤝
