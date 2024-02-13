
# Awakening Observer Pattern

Welcome to the Observer Pattern Playground! 🎉

This repository serves as a sandbox for exploring Observer Patterns in React. The Observer pattern is a behavioral design pattern where an object, known as the subject, maintains a list of dependents, known as observers, that need to be notified of any changes in the subject's state. When the subject's state changes, it notifies all its observers, typically by calling one of their methods. This pattern is commonly used in scenarios where you have one-to-many relationships between objects, and you want to ensure that changes to one object's state are reflected in other objects. The Observer pattern promotes loose coupling between objects, making it easier to maintain and extend the codebase.

In this playground, you'll find example showcasing  Observer Patterns implemented using React. Whether you're new to Observer Patterns or an experienced developer looking for inspiration, this repository is a perfect starting point to experiment, learn, and create amazing user interfaces.

## Key Features
- Subject: Maintains a list of observers and notifies them of state changes.
- Observer: Registers with a subject to receive notifications and updates its state accordingly.
- Loose Coupling: Objects are decoupled, allowing for easier maintenance and scalability.
- One-to-Many Relationship: Enables broadcasting changes to multiple dependent objects efficiently.

## Use Cases
- State Management: Update UI components when underlying data changes.
- Event Handling: Notify components of user interactions or system events.
- Data Binding: Synchronize changes in data with changes in the UI.
## Tools and Tech

 - [React JS](https://react.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Observer Pattern](hhttps://www.patterns.dev/vanilla/observer-pattern)


## Run Locally

Clone the project

```bash
  git clone https://github.com/sarojghalan/Awakening_Observer_Pattern.git
```

Go to the project directory

```bash
  cd Awakening_Observer_Pattern
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run start
```



## Authors

- [Sarojghalan](https://github.com/sarojghalan)

