/**
 * AI Engineer Roadmap 2026 — Data Schema (v2)
 *
 * Full curriculum dataset: Overview & Mindset followed by Weeks 1–33+.
 * Weeks 15–33 use the exact source deep-links (bit.ly short-links and direct
 * YouTube links) and the exact video skip/range badges from the roadmap, e.g.
 * the Deep Learning playlist (https://bit.ly/3vOZ3zV) with 'Skip videos #16,
 * 17, 29, 43, 44, 45, 48' and the NLP playlist (https://bit.ly/3XnjfEZ)
 * with 'Skip S3 E2 (End to End NLP Project)'.
 * Where the roadmap gives no short-link for a topic, the entry points to the
 * official documentation of the referenced project instead.
 */

window.ROADMAP_DATA = {
  title: "AI Engineer Roadmap 2026",
  subtitle: "8-Month Structured Self-Learning Path • 4 hrs/day, 6 days/week",
  version: "2026-02-14",

  // ------------------------------------------------------------------
  // Overview & Mindset
  // ------------------------------------------------------------------
  overview: {
    title: "Overview & Mindset",
    techSkills: [
      "Python Programming",
      "Data Structures & Algorithms",
      "Mathematics for ML (Linear Algebra, Calculus, Probability)",
      "Data Manipulation with NumPy & pandas",
      "Data Visualization with Matplotlib & seaborn",
      "SQL & Relational Databases",
      "Version Control with Git",
      "Command Line Basics",
    ],
    coreSkills: [
      "Problem Decomposition",
      "Algorithmic Thinking",
      "Debugging & Troubleshooting",
      "Clear Communication",
      "Time Management & Consistency",
      "Technical Writing & Documentation",
    ],
    optionalSkills: [
      "Cloud Platform Fundamentals",
      "Docker & Containerization",
      "REST API Design",
      "Unit Testing with pytest",
      "CI/CD Basics",
    ],
    handymanMindset: {
      title: "The Handyman Mindset",
      description:
        "Choose the right tool for the right problem — not the shiniest one.",
      approaches: [
        {
          name: "Rule-Based",
          when: "Use when logic is deterministic and rules are explicit.",
          example: "Form validation, simple routing, regex parsing.",
          icon: "rule",
        },
        {
          name: "Statistical ML",
          when: "Use when you have structured tabular data and need interpretable predictions.",
          example: "House price prediction, customer churn, credit scoring.",
          icon: "ml",
        },
        {
          name: "Deep Learning",
          when: "Use when you have unstructured data (images, text, audio) and large datasets.",
          example: "Image classification, sentiment analysis, speech recognition.",
          icon: "dl",
        },
        {
          name: "Gen AI",
          when: "Use for generation, summarization, or open-ended natural-language tasks.",
          example: "Chatbots, content generation, code completion, semantic search.",
          icon: "genai",
        },
      ],
    },
  },

  // ------------------------------------------------------------------
  // Modules (16 topic-based learning modules grouping the weeks)
  // ------------------------------------------------------------------
  modules: [
    { id: "mod-1", n: 1, title: "AI Foundations + Python", icon: "python", tone: "python", weeks: [1] },
    { id: "mod-2", n: 2, title: "Data Structures & Algorithms", icon: "dsa", tone: "dsa", weeks: [2] },
    { id: "mod-3", n: 3, title: "Advanced Python", icon: "python", tone: "python", weeks: [3] },
    { id: "mod-4", n: 4, title: "Version Control with Git", icon: "git", tone: "git", weeks: [4] },
    { id: "mod-5", n: 5, title: "Data Toolkit: NumPy, pandas, Visualization & SQL", icon: "data", tone: "sql", weeks: [5] },
    { id: "mod-6", n: 6, title: "Mathematics & Statistics for AI", icon: "math", tone: "math", weeks: [6, 7, 8] },
    { id: "mod-7", n: 7, title: "Machine Learning Core", icon: "ml", tone: "ml", weeks: [9, 10, 11] },
    { id: "mod-8", n: 8, title: "DevOps & ML Ops", icon: "devops", tone: "devops", weeks: [12] },
    { id: "mod-9", n: 9, title: "FastAPI & API Development", icon: "fastapi", tone: "fastapi", weeks: [13] },
    { id: "mod-10", n: 10, title: "Projects & Career Launch", icon: "genai", tone: "genai", weeks: [14] },
    { id: "mod-11", n: 11, title: "Deep Learning", icon: "dl", tone: "dl", weeks: [15, 16, 17, 18] },
    { id: "mod-12", n: 12, title: "Specialization: NLP or Computer Vision", icon: "genai", tone: "genai", weeks: [19, 20, 21], optional: true },
    { id: "mod-13", n: 13, title: "Generative AI & Agentic AI Foundations", icon: "genai", tone: "genai", weeks: [22, 23, 24] },
    { id: "mod-14", n: 14, title: "Gen AI & Agentic AI Projects", icon: "genai", tone: "genai", weeks: [25, 26, 27] },
    { id: "mod-15", n: 15, title: "Unguided AI Projects", icon: "star", tone: "genai", weeks: [28, 29] },
    { id: "mod-16", n: 16, title: "Cloud AI & Optional Skills", icon: "devops", tone: "devops", weeks: [30, 31, 32, 33], optional: true },
  ],

  // ------------------------------------------------------------------
  // Weeks 1–14
  // ------------------------------------------------------------------
  weeks: [
    {
      id: "week-1",
      number: 1,
      title: "AI Basics + Beginners Python",
      duration: "Week 1 • 24 hrs",
      icon: "python",
      tone: "python",
      status: "not-started",

      topics: [
        {
          id: "w1-topic-1",
          title: "AI Basics — What is AI?",
          completed: false,
          links: [
            { label: "Intro Course ↗", url: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
          ],
          subTopics: [
            { id: "w1-topic-1-a", title: "Narrow vs General AI", completed: false },
            { id: "w1-topic-1-b", title: "How AI is used today", completed: false },
          ],
        },
        {
          id: "w1-topic-2",
          title: "Python Basics",
          completed: false,
          links: [
            { label: "Tutorial ↗", url: "https://docs.python.org/3/tutorial/" },
            { label: "Exercises ↗", url: "https://docs.python.org/3/tutorial/introduction.html" },
          ],
          subTopics: [
            { id: "w1-topic-2-a", title: "Variables, Types & Operators", completed: false },
            { id: "w1-topic-2-b", title: "Control Flow & Loops", completed: false },
            { id: "w1-topic-2-c", title: "Functions & Scope", completed: false },
          ],
        },
        {
          id: "w1-topic-3",
          title: "Environment & Tooling",
          completed: false,
          links: [
            { label: "venv Docs ↗", url: "https://docs.python.org/3/library/venv.html" },
          ],
          subTopics: [
            { id: "w1-topic-3-a", title: "Installing Python & pip", completed: true },
            { id: "w1-topic-3-b", title: "Virtual Environments (venv)", completed: false },
            { id: "w1-topic-3-c", title: "Jupyter Notebook Setup", completed: false },
          ],
        },
        {
          id: "w1-topic-4",
          title: "Learning Aids & Mindset",
          completed: false,
          links: [
            { label: "LinkedIn Core Skill checklist ↗", url: "https://www.linkedin.com/learning/" },
          ],
          subTopics: [
            { id: "w1-topic-4-a", title: "Use an AI tutor as a thinking partner", completed: false },
            { id: "w1-topic-4-b", title: "Track your core skills weekly", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w1-res-1",
          title: "Python Official Tutorial",
          type: "Documentation",
          url: "https://docs.python.org/3/tutorial/",
          note: "Read Chapters 1–9 before moving to Week 2.",
        },
        {
          id: "w1-res-2",
          title: "Automate the Boring Stuff with Python",
          type: "Book",
          url: "https://automatetheboringstuff.com/",
          note: "Focus on core Python; skip desktop automation chapters.",
        },
        {
          id: "w1-res-3",
          title: "Python Beginner Video Series",
          type: "Playlist",
          url: "https://www.youtube.com/",
          note: "Watch the Python fundamentals module in order.",
          skipBadge: "First 16 videos only",
        },
      ],

      communityCallout: {
        title: "Community & Soft Skills",
        items: [
          "Set up an account on a git hosting service and pin your first Python script repository.",
          "Write a short README for your Week 1 project explaining what it does.",
          "Practice explaining one Python concept aloud (a key interview skill).",
        ],
      },

      assignments: [
        {
          id: "w1-assign-1",
          title: "Track A: Build a CLI To-Do List",
          description:
            "Create a command-line app that can add, list, complete, and delete tasks, persisted to a local JSON file.",
          priority: "high",
          completed: false,
        },
        {
          id: "w1-assign-2",
          title: "Free Resources: Environment Checklist",
          description:
            "Verify Python, pip, venv, and Jupyter all work. Take a screenshot of your terminal running a notebook.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-2",
      number: 2,
      title: "Data Structures and Algorithms in Python",
      duration: "Week 2 • 24 hrs",
      icon: "dsa",
      tone: "dsa",
      status: "not-started",

      topics: [
        {
          id: "w2-topic-1",
          title: "Core Data Structures",
          completed: false,
          links: [
            { label: "DSA Playlist ↗", url: "https://docs.python.org/3/tutorial/datastructures.html" },
          ],
          skipBadge: "Skip videos #15, 16, 17, 18, 19",
          subTopics: [
            { id: "w2-topic-1-a", title: "Lists, Stacks & Queues", completed: false },
            { id: "w2-topic-1-b", title: "Hash Maps / Dictionaries", completed: false },
            { id: "w2-topic-1-c", title: "Trees & Graphs (intro)", completed: false },
          ],
        },
        {
          id: "w2-topic-2",
          title: "Algorithms",
          completed: false,
          subTopics: [
            { id: "w2-topic-2-a", title: "Big-O & Complexity Analysis", completed: false },
            { id: "w2-topic-2-b", title: "Sorting & Searching", completed: false },
            { id: "w2-topic-2-c", title: "Recursion", completed: false },
          ],
        },
        {
          id: "w2-topic-3",
          title: "Communication Skill",
          completed: false,
          links: [
            { label: "Toastmasters resource ↗", url: "https://www.toastmasters.org/About" },
          ],
          subTopics: [
            { id: "w2-topic-3-a", title: "Prepare a 2-minute technical explainer", completed: false },
            { id: "w2-topic-3-b", title: "Record and review yourself", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w2-res-1",
          title: "Python Data Structures Documentation",
          type: "Documentation",
          url: "https://docs.python.org/3/tutorial/datastructures.html",
          note: "Work through the built-in type examples.",
        },
        {
          id: "w2-res-2",
          title: "DSA Practice — Problem Walkthroughs",
          type: "Course",
          url: "https://docs.python.org/3/howto/",
          note: "Solve 2–3 problems per concept and explain your reasoning.",
        },
      ],

      communityCallout: {
        title: "Communication & Community",
        items: [
          "Join a coding community and ask/answer at least one question this week.",
          "Post a short summary of one algorithm you learned.",
        ],
      },

      assignments: [
        {
          id: "w2-assign-1",
          title: "Implement Data Structures from Scratch",
          description:
            "Code a stack, queue, and hash map using only Python primitives, then compare to built-ins.",
          priority: "high",
          completed: false,
        },
        {
          id: "w2-assign-2",
          title: "Algorithm Complexity Cheat Sheet",
          description:
            "Create a one-page reference of common operations and their Big-O costs.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-3",
      number: 3,
      title: "Advanced Python",
      duration: "Week 3 • 24 hrs",
      icon: "python",
      tone: "python",
      status: "not-started",

      topics: [
        {
          id: "w3-topic-1",
          title: "Advanced Functions",
          completed: false,
          subTopics: [
            { id: "w3-topic-1-a", title: "Decorators & Closures", completed: false },
            { id: "w3-topic-1-b", title: "Higher-order functions", completed: false },
          ],
        },
        {
          id: "w3-topic-2",
          title: "Generators & Iterators",
          completed: false,
          links: [
            { label: "Advanced Video Range ↗", url: "https://docs.python.org/3/howto/functional.html" },
          ],
          skipBadge: "17th to 27th video",
        },
        {
          id: "w3-topic-3",
          title: "Object-Oriented Programming",
          completed: false,
          subTopics: [
            { id: "w3-topic-3-a", title: "Classes, Inheritance & Polymorphism", completed: false },
            { id: "w3-topic-3-b", title: "Magic / Dunder methods", completed: false },
          ],
        },
        {
          id: "w3-topic-4",
          title: "Modules, Packages & pip",
          completed: false,
          subTopics: [
            { id: "w3-topic-4-a", title: "Writing and importing modules", completed: false },
            { id: "w3-topic-4-b", title: "Managing dependencies with pip", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w3-res-1",
          title: "Advanced Python Tutorial Series",
          type: "Playlist",
          url: "https://docs.python.org/3/howto/functional.html",
          note: "Covers generators, closures, and functional idioms.",
          skipBadge: "17th to 27th video",
        },
        {
          id: "w3-res-2",
          title: "Business Fundamentals — Case Study",
          type: "Course",
          url: "https://hbr.org/",
          note: "Read one product/strategy case study and summarize the business model.",
        },
      ],

      communityCallout: {
        title: "Networking & Community",
        items: [
          "Send 3 thoughtful connection requests and engage with 5 posts this week.",
          "Introduce yourself in a tech community (e.g., a Discord server for Python learners).",
          "Summarize the business case study in one paragraph to practice clarity.",
        ],
      },

      assignments: [
        {
          id: "w3-assign-1",
          title: "Refactor a Script with OOP + Decorators",
          description:
            "Take an earlier week's script and restructure it using classes and at least one decorator.",
          priority: "high",
          completed: false,
        },
        {
          id: "w3-assign-2",
          title: "Publish a Small Package",
          description:
            "Package one of your reusable helper functions into a module and install it locally with pip.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-4",
      number: 4,
      title: "Version Control — Git & GitHub",
      duration: "Week 4 • 24 hrs",
      icon: "git",
      tone: "git",
      status: "not-started",

      topics: [
        {
          id: "w4-topic-1",
          title: "Git Basics",
          completed: false,
          links: [
            { label: "Git Docs ↗", url: "https://git-scm.com/doc" },
          ],
          subTopics: [
            { id: "w4-topic-1-a", title: "init, add, commit", completed: false },
            { id: "w4-topic-1-b", title: "Status, log, diff", completed: false },
          ],
        },
        {
          id: "w4-topic-2",
          title: "Branching & Merging",
          completed: false,
          subTopics: [
            { id: "w4-topic-2-a", title: "Branches and checkout", completed: false },
            { id: "w4-topic-2-b", title: "Merging and resolving conflicts", completed: false },
          ],
        },
        {
          id: "w4-topic-3",
          title: "Working with Remotes",
          completed: false,
          subTopics: [
            { id: "w4-topic-3-a", title: "clone, push, pull, fetch", completed: false },
            { id: "w4-topic-3-b", title: "Pull requests & code review", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w4-res-1",
          title: "Pro Git — Free Book",
          type: "Book",
          url: "https://git-scm.com/book/en/v2",
          note: "Read the first half of the book; skim the rest.",
        },
        {
          id: "w4-res-2",
          title: "Git & GitHub Video Playlist",
          type: "Playlist",
          url: "https://www.youtube.com/",
          note: "Follow along with a repository as the instructor commits.",
        },
        {
          id: "w4-res-3",
          title: "Presentation Skills — Death by PowerPoint",
          type: "Course",
          url: "https://www.ted.com/talks",
          note: "Learn concise storytelling for your future talks.",
        },
      ],

      communityCallout: {
        title: "Presentation & Writing",
        items: [
          "Prepare a 5-slide talk explaining how git works to a beginner.",
          "Give the talk to a friend or record yourself.",
        ],
      },

      assignments: [
        {
          id: "w4-assign-1",
          title: "Blog Post: 'Git in 5 Minutes'",
          description:
            "Write a short, beginner-friendly blog post explaining a git concept and publish it to your repository.",
          priority: "high",
          completed: false,
        },
        {
          id: "w4-assign-2",
          title: "Open a Pull Request",
          description:
            "Contribute a small change (docs or code) to a project and open a PR.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-5",
      number: 5,
      title: "NumPy, Pandas, Data Visualization & SQL",
      duration: "Week 5 • 24 hrs",
      icon: "data",
      tone: "sql",
      status: "not-started",

      topics: [
        {
          id: "w5-topic-1",
          title: "NumPy",
          completed: false,
          links: [
            { label: "NumPy Quickstart ↗", url: "https://numpy.org/doc/stable/user/quickstart.html" },
          ],
          subTopics: [
            { id: "w5-topic-1-a", title: "Arrays & broadcasting", completed: false },
            { id: "w5-topic-1-b", title: "Vectorized operations", completed: false },
          ],
        },
        {
          id: "w5-topic-2",
          title: "pandas",
          completed: false,
          links: [
            { label: "10 Minutes to pandas ↗", url: "https://pandas.pydata.org/docs/user_guide/10min.html" },
          ],
          subTopics: [
            { id: "w5-topic-2-a", title: "Series & DataFrames", completed: false },
            { id: "w5-topic-2-b", title: "Cleaning & filtering", completed: false },
          ],
        },
        {
          id: "w5-topic-3",
          title: "Data Visualization",
          completed: false,
          subTopics: [
            { id: "w5-topic-3-a", title: "Matplotlib fundamentals", completed: false },
            { id: "w5-topic-3-b", title: "seaborn statistical plots", completed: false },
          ],
        },
        {
          id: "w5-topic-4",
          title: "SQL & Databases",
          completed: false,
          links: [
            { label: "SQL Tutorial ↗", url: "https://www.w3schools.com/sql/" },
          ],
          subTopics: [
            { id: "w5-topic-4-a", title: "SELECT, WHERE, ORDER BY", completed: false },
            { id: "w5-topic-4-b", title: "Joins & aggregation", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w5-res-1",
          title: "Math & Statistics Course — Chapters 4 & 5 Free",
          type: "Course",
          url: "https://www.khanacademy.org/math/statistics-probability",
          note: "Chapters 4 & 5 are free — complete both.",
          skipBadge: "Chapters 4 & 5 Free",
        },
        {
          id: "w5-res-2",
          title: "SQL Full Tutorial (Video)",
          type: "Tutorial",
          url: "https://www.w3schools.com/sql/",
          note: "Follow the interactive examples.",
        },
      ],

      communityCallout: {
        title: "Community & Report Writing",
        items: [
          "Share one interesting pattern you found in a public dataset.",
          "Write up your EDA findings as if for a stakeholder.",
        ],
      },

      assignments: [
        {
          id: "w5-assign-1",
          title: "Exploratory Data Analysis Notebook",
          description:
            "Load a public dataset, clean it, and produce summary statistics plus visualizations.",
          priority: "high",
          completed: false,
        },
        {
          id: "w5-assign-2",
          title: "SQL Query Set",
          description:
            "Write 10 queries against a sample database covering filters, joins, and aggregation.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-6",
      number: 6,
      title: "Mathematics & Statistics for AI — Linear Algebra",
      duration: "Week 6 • 24 hrs",
      icon: "math",
      tone: "math",
      status: "not-started",

      topics: [
        {
          id: "w6-topic-1",
          title: "Vectors & Matrices",
          completed: false,
          links: [
            { label: "3Blue1Brown ↗", url: "https://www.3blue1brown.com/" },
            { label: "Khan Academy ↗", url: "https://www.khanacademy.org/math/linear-algebra" },
          ],
          subTopics: [
            { id: "w6-topic-1-a", title: "Vectors, magnitude, dot product", completed: false },
            { id: "w6-topic-1-b", title: "Matrix multiplication & inverses", completed: false },
          ],
        },
        {
          id: "w6-topic-2",
          title: "Eigenvalues & Eigenvectors",
          completed: false,
          subTopics: [
            { id: "w6-topic-2-a", title: "Intuition via transformations", completed: false },
            { id: "w6-topic-2-b", title: "Applications in ML", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w6-res-1",
          title: "Essence of Linear Algebra (Video Series)",
          type: "Playlist",
          url: "https://www.3blue1brown.com/",
          note: "Watch the full series once, then re-watch as needed.",
        },
        {
          id: "w6-res-2",
          title: "Khan Academy — Linear Algebra",
          type: "Course",
          url: "https://www.khanacademy.org/math/linear-algebra",
          note: "Do the exercises after each unit.",
        },
      ],

      communityCallout: {
        title: "Explain to Learn",
        items: [
          "Explain matrix multiplication in plain words to a friend.",
          "Add a 'math notes' section to your portfolio repo.",
        ],
      },

      assignments: [
        {
          id: "w6-assign-1",
          title: "Linear Algebra with NumPy",
          description:
            "Recreate dot products, matrix multiplication, and eigenvalues using NumPy and verify by hand.",
          priority: "high",
          completed: false,
        },
        {
          id: "w6-assign-2",
          title: "Concept Flashcards",
          description:
            "Create flashcards for key terms (eigenvector, span, rank, determinant).",
          priority: "low",
          completed: false,
        },
      ],
    },

    {
      id: "week-7",
      number: 7,
      title: "Mathematics & Statistics for AI — Calculus & Optimization",
      duration: "Week 7 • 24 hrs",
      icon: "math",
      tone: "math",
      status: "not-started",

      topics: [
        {
          id: "w7-topic-1",
          title: "Derivatives & Gradients",
          completed: false,
          links: [
            { label: "StatQuest ↗", url: "https://statquest.org/" },
          ],
          subTopics: [
            { id: "w7-topic-1-a", title: "Derivative intuition & rules", completed: false },
            { id: "w7-topic-1-b", title: "Partial derivatives & gradients", completed: false },
          ],
        },
        {
          id: "w7-topic-2",
          title: "The Chain Rule & Backpropagation",
          completed: false,
          subTopics: [
            { id: "w7-topic-2-a", title: "Chain rule groundwork", completed: false },
            { id: "w7-topic-2-b", title: "Why it powers deep learning", completed: false },
          ],
        },
        {
          id: "w7-topic-3",
          title: "Optimization",
          completed: false,
          subTopics: [
            { id: "w7-topic-3-a", title: "Gradient descent", completed: false },
            { id: "w7-topic-3-b", title: "Learning rates & loss landscapes", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w7-res-1",
          title: "StatQuest — Statistics & ML Made Simple",
          type: "Course",
          url: "https://statquest.org/",
          note: "Watch the playlist on gradient descent.",
        },
        {
          id: "w7-res-2",
          title: "Khan Academy — Differential Calculus",
          type: "Course",
          url: "https://www.khanacademy.org/math/differential-calculus",
          note: "Complete the derivative rules units.",
        },
      ],

      communityCallout: {
        title: "Monthly Review",
        items: [
          "Solve a derivative problem by hand every other day.",
          "Record a 1-minute video explaining the chain rule.",
        ],
      },

      assignments: [
        {
          id: "w7-assign-1",
          title: "Implement Gradient Descent from Scratch",
          description:
            "Code gradient descent on a simple linear function and plot the loss curve.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-8",
      number: 8,
      title: "Mathematics & Statistics for AI — Probability & Statistics",
      duration: "Week 8 • 24 hrs",
      icon: "math",
      tone: "math",
      status: "not-started",

      topics: [
        {
          id: "w8-topic-1",
          title: "Descriptive Statistics",
          completed: false,
          links: [
            { label: "Khan Academy Statistics ↗", url: "https://www.khanacademy.org/math/statistics-probability" },
          ],
          subTopics: [
            { id: "w8-topic-1-a", title: "Mean, median, variance, standard deviation", completed: false },
            { id: "w8-topic-1-b", title: "Distributions (normal, binomial)", completed: false },
          ],
        },
        {
          id: "w8-topic-2",
          title: "Probability Foundations",
          completed: false,
          subTopics: [
            { id: "w8-topic-2-a", title: "Bayes' theorem", completed: false },
            { id: "w8-topic-2-b", title: "Conditional probability & independence", completed: false },
          ],
        },
        {
          id: "w8-topic-3",
          title: "Sampling & Inference",
          completed: false,
          subTopics: [
            { id: "w8-topic-3-a", title: "Sampling & the central limit theorem", completed: false },
            { id: "w8-topic-3-b", title: "Correlation vs causation", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w8-res-1",
          title: "Khan Academy — Statistics & Probability",
          type: "Course",
          url: "https://www.khanacademy.org/math/statistics-probability",
          note: "This is the primary resource for the week.",
        },
        {
          id: "w8-res-2",
          title: "StatQuest — Statistics Playlist",
          type: "Playlist",
          url: "https://statquest.org/",
          note: "Watch the hypothesis-testing videos.",
        },
        {
          id: "w8-res-3",
          title: "Free Statistics Video Playlist",
          type: "Playlist",
          url: "https://www.khanacademy.org/math/statistics-probability",
          skipBadge: "First 12 videos only",
        },
      ],

      communityCallout: {
        title: "Apply to Real Data",
        items: [
          "Compute descriptive stats on a small public dataset using pandas.",
          "Discuss whether a given headline correlation implies causation.",
        ],
      },

      assignments: [
        {
          id: "w8-assign-1",
          title: "Probability & Stats Notebook",
          description:
            "Use Python to compute probabilities, sample from distributions, and report summary statistics.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-9",
      number: 9,
      title: "Machine Learning — Preprocessing",
      duration: "Week 9 • 28 hrs",
      icon: "ml",
      tone: "ml",
      status: "not-started",

      topics: [
        {
          id: "w9-topic-1",
          title: "Data Cleaning & Preparation",
          completed: false,
          links: [
            { label: "ML Playlist ↗", url: "https://scikit-learn.org/stable/tutorial/index.html" },
          ],
          skipBadge: "First 21 videos",
          subTopics: [
            { id: "w9-topic-1-a", title: "Handling missing values & outliers", completed: false },
            { id: "w9-topic-1-b", title: "Removing duplicates & fixing types", completed: false },
          ],
        },
        {
          id: "w9-topic-2",
          title: "Training / Validation / Test Split",
          completed: false,
          subTopics: [
            { id: "w9-topic-2-a", title: "Why we hold out data", completed: false },
            { id: "w9-topic-2-b", title: "Stratified splitting", completed: false },
          ],
        },
        {
          id: "w9-topic-3",
          title: "Feature Scaling & Encoding",
          completed: false,
          subTopics: [
            { id: "w9-topic-3-a", title: "Normalization vs standardization", completed: false },
            { id: "w9-topic-3-b", title: "Categorical encoding", completed: false },
          ],
        },
        {
          id: "w9-topic-4",
          title: "Pipelines",
          completed: false,
          links: [
            { label: "scikit-learn Docs ↗", url: "https://scikit-learn.org/stable/" },
          ],
        },
      ],

      resources: [
        {
          id: "w9-res-1",
          title: "Machine Learning Full Playlist",
          type: "Playlist",
          url: "https://scikit-learn.org/stable/tutorial/index.html",
          note: "Watch the preprocessing module end-to-end.",
          skipBadge: "First 21 videos",
        },
        {
          id: "w9-res-2",
          title: "scikit-learn User Guide",
          type: "Documentation",
          url: "https://scikit-learn.org/stable/user_guide.html",
          note: "Read the data-preprocessing sections.",
        },
        {
          id: "w9-res-3",
          title: "Kaggle — Datasets & Notebooks",
          type: "Repo",
          url: "https://www.kaggle.com/",
          note: "Study a top-voted preprocessing notebook.",
        },
      ],

      communityCallout: {
        title: "Document & Share",
        items: [
          "Write a short walkthrough of your preprocessing decisions.",
          "Ask one clarifying question in a community forum.",
        ],
      },

      assignments: [
        {
          id: "w9-assign-1",
          title: "Preprocess a Tabular Dataset",
          description:
            "Clean, split, scale, and encode a public dataset; log every transformation you apply.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-10",
      number: 10,
      title: "Machine Learning — Model Building & Feature Engineering",
      duration: "Week 10 • 28 hrs",
      icon: "ml",
      tone: "ml",
      status: "not-started",

      topics: [
        {
          id: "w10-topic-1",
          title: "Regression & Classification Basics",
          completed: false,
          links: [
            { label: "scikit-learn Examples ↗", url: "https://scikit-learn.org/stable/auto_examples/index.html" },
          ],
          subTopics: [
            { id: "w10-topic-1-a", title: "Linear & logistic regression", completed: false },
            { id: "w10-topic-1-b", title: "Decision trees & random forests", completed: false },
          ],
        },
        {
          id: "w10-topic-2",
          title: "Feature Engineering",
          completed: false,
          links: [
            { label: "Feature Engineering Playlist ↗", url: "https://www.kaggle.com/learn/feature-engineering" },
          ],
          subTopics: [
            { id: "w10-topic-2-a", title: "Creating & selecting features", completed: false },
            { id: "w10-topic-2-b", title: "Encoding time & categorical data", completed: false },
          ],
        },
        {
          id: "w10-topic-3",
          title: "Baseline First",
          completed: false,
          subTopics: [
            { id: "w10-topic-3-a", title: "Get a simple model working first", completed: false },
            { id: "w10-topic-3-b", title: "Iterate on features", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w10-res-1",
          title: "Feature Engineering Course",
          type: "Course",
          url: "https://www.kaggle.com/learn/feature-engineering",
          note: "Complete the micro-course exercises.",
        },
        {
          id: "w10-res-2",
          title: "Kaggle — Competitions & Getting Started",
          type: "Repo",
          url: "https://www.kaggle.com/",
          note: "Enter a beginner competition or study its kernels.",
        },
      ],

      communityCallout: {
        title: "Collaboration Skills",
        items: [
          "Read an open Kaggle notebook end-to-end and leave a note on what you learned.",
          "Post a LinkedIn-style reflective post about your model iteration process.",
        ],
      },

      assignments: [
        {
          id: "w10-assign-1",
          title: "Train a Baseline & Improve It",
          description:
            "Train a baseline model, then engineer features to improve its score; record both results.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-11",
      number: 11,
      title: "Machine Learning — Evaluation & Projects",
      duration: "Week 11 • 28 hrs",
      icon: "ml",
      tone: "ml",
      status: "not-started",

      topics: [
        {
          id: "w11-topic-1",
          title: "Evaluation Metrics",
          completed: false,
          subTopics: [
            { id: "w11-topic-1-a", title: "Accuracy, precision, recall, F1", completed: false },
            { id: "w11-topic-1-b", title: "Confusion matrix & ROC/AUC", completed: false },
          ],
        },
        {
          id: "w11-topic-2",
          title: "Cross-Validation & Hyperparameter Tuning",
          completed: false,
          subTopics: [
            { id: "w11-topic-2-a", title: "k-fold cross-validation", completed: false },
            { id: "w11-topic-2-b", title: "Grid search / random search", completed: false },
          ],
        },
        {
          id: "w11-topic-3",
          title: "Project Workflow & Tooling",
          completed: false,
          subTopics: [
            { id: "w11-topic-3-a", title: "Scrum / Kanban basics", completed: false },
            { id: "w11-topic-3-b", title: "Issue tracking & project boards", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w11-res-1",
          title: "Model Evaluation Guide",
          type: "Documentation",
          url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
          note: "Read the classification metrics section.",
        },
        {
          id: "w11-res-2",
          title: "Kaggle — Get Started",
          type: "Repo",
          url: "https://www.kaggle.com/",
          note: "Submit to one beginner competition this week.",
        },
      ],

      communityCallout: {
        title: "Teamwork & Visibility",
        items: [
          "Organize your week with an issue tracker or Kanban board.",
          "Help someone in a community by answering a question.",
        ],
      },

      assignments: [
        {
          id: "w11-assign-1",
          title: "Evaluate & Tune Your Model",
          description:
            "Run cross-validation, tune hyperparameters, and report a final metrics table.",
          priority: "high",
          completed: false,
        },
        {
          id: "w11-assign-2",
          title: "Write a Model Card Summary",
          description:
            "Document the dataset, preprocessing, model choice, and metrics in one page.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-12",
      number: 12,
      title: "DevOps & ML Ops — Deployment Foundations",
      duration: "Week 12 • 28 hrs",
      icon: "devops",
      tone: "devops",
      status: "not-started",

      topics: [
        {
          id: "w12-topic-1",
          title: "Containerization with Docker",
          completed: false,
          links: [
            { label: "Docker Get Started ↗", url: "https://docs.docker.com/get-started/" },
          ],
          subTopics: [
            { id: "w12-topic-1-a", title: "Images, containers, Dockerfile", completed: false },
            { id: "w12-topic-1-b", title: "Running your Python app in a container", completed: false },
          ],
        },
        {
          id: "w12-topic-2",
          title: "CI/CD Basics",
          completed: false,
          subTopics: [
            { id: "w12-topic-2-a", title: "Automated builds & tests", completed: false },
            { id: "w12-topic-2-b", title: "Deploy pipelines", completed: false },
          ],
        },
        {
          id: "w12-topic-3",
          title: "Experiment Tracking & MLflow",
          completed: false,
          links: [
            { label: "MLflow ↗", url: "https://mlflow.org/" },
          ],
          subTopics: [
            { id: "w12-topic-3-a", title: "Logging metrics & parameters", completed: false },
            { id: "w12-topic-3-b", title: "Model registry", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w12-res-1",
          title: "Docker Get Started Tutorial",
          type: "Course",
          url: "https://docs.docker.com/get-started/",
          note: "Complete the tutorial through the 'sharing your image' step.",
        },
        {
          id: "w12-res-2",
          title: "MLflow Documentation",
          type: "Documentation",
          url: "https://mlflow.org/",
          note: "Focus on tracking and the model registry.",
        },
        {
          id: "w12-res-3",
          title: "Open Source Contribution — Good First Issue Guide",
          type: "Repo",
          url: "https://github.com/search?q=label%3A%22good+first+issue%22&type=issues",
          note: "Find a 'good first issue' and claim it.",
        },
      ],

      communityCallout: {
        title: "Fresher Tip & Open Source",
        items: [
          "Talking about deployment experience in interviews boosts your hireability.",
          "Open a PR to a beginner-friendly open-source project this week.",
        ],
      },

      assignments: [
        {
          id: "w12-assign-1",
          title: "Containerize a Python Script",
          description:
            "Write a Dockerfile for one of your ML scripts and run it in a container.",
          priority: "high",
          completed: false,
        },
        {
          id: "w12-assign-2",
          title: "Open a Good First Issue PR",
          description:
            "Contribute a fix or improvement to an open-source project (docs count!).",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-13",
      number: 13,
      title: "FastAPI — Build & Deploy an API",
      duration: "Week 13 • 28 hrs",
      icon: "fastapi",
      tone: "fastapi",
      status: "not-started",

      topics: [
        {
          id: "w13-topic-1",
          title: "FastAPI Fundamentals",
          completed: false,
          links: [
            { label: "FastAPI Docs ↗", url: "https://fastapi.tiangolo.com/" },
          ],
          subTopics: [
            { id: "w13-topic-1-a", title: "Routes & path operations", completed: false },
            { id: "w13-topic-1-b", title: "Request bodies & validation", completed: false },
          ],
        },
        {
          id: "w13-topic-2",
          title: "Serving an ML Model",
          completed: false,
          subTopics: [
            { id: "w13-topic-2-a", title: "Load a trained model in the API", completed: false },
            { id: "w13-topic-2-b", title: "Write predict/inference endpoints", completed: false },
          ],
        },
        {
          id: "w13-topic-3",
          title: "Testing & Documentation",
          completed: false,
          subTopics: [
            { id: "w13-topic-3-a", title: "Automatic OpenAPI docs", completed: false },
            { id: "w13-topic-3-b", title: "Unit-test endpoints", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w13-res-1",
          title: "FastAPI Official Tutorial",
          type: "Course",
          url: "https://fastapi.tiangolo.com/tutorial/",
          note: "Complete the tutorial up to dependencies.",
        },
        {
          id: "w13-res-2",
          title: "Deploying FastAPI Applications",
          type: "Documentation",
          url: "https://fastapi.tiangolo.com/deployment/",
          note: "Read the deployment options and choose one.",
        },
      ],

      communityCallout: {
        title: "Show Your Work",
        items: [
          "Deploy your API and share the public endpoint link.",
          "Ask for feedback on the API design in a community.",
        ],
      },

      assignments: [
        {
          id: "w13-assign-1",
          title: "Serve an ML Model with FastAPI",
          description:
            "Wrap one of your trained models in a FastAPI app with a /predict endpoint and validation.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-14",
      number: 14,
      title: "Machine Learning Projects & ATS Resume / Portfolio",
      duration: "Week 14 • 30 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w14-topic-1",
          title: "Bangalore Property Price Prediction Project",
          completed: false,
          subTopics: [
            { id: "w14-topic-1-a", title: "Collect & explore the dataset", completed: false },
            { id: "w14-topic-1-b", title: "Feature engineering & modeling", completed: false },
            { id: "w14-topic-1-c", title: "Evaluate and document results", completed: false },
          ],
        },
        {
          id: "w14-topic-2",
          title: "ATS-Optimized Resume",
          completed: false,
          links: [
            { label: "ATS Resume Video & Checklist ↗", url: "https://www.linkedin.com/learning/" },
          ],
          subTopics: [
            { id: "w14-topic-2-a", title: "Use standard section headings", completed: false },
            { id: "w14-topic-2-b", title: "Match keywords from job descriptions", completed: false },
          ],
        },
        {
          id: "w14-topic-3",
          title: "Personal Portfolio via GitHub Pages",
          completed: false,
          links: [
            { label: "GitHub Pages Guide ↗", url: "https://pages.github.com/" },
          ],
          subTopics: [
            { id: "w14-topic-3-a", title: "Build a static portfolio site", completed: false },
            { id: "w14-topic-3-b", title: "Link projects and blog posts", completed: false },
          ],
        },
        {
          id: "w14-topic-4",
          title: "Deploy a Classification App",
          completed: false,
          subTopics: [
            { id: "w14-topic-4-a", title: "Train a classifier on a Kaggle dataset", completed: false },
            { id: "w14-topic-4-b", title: "Serve it with FastAPI and deploy", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w14-res-1",
          title: "ATS Resume Checklist",
          type: "Course",
          url: "https://www.linkedin.com/learning/",
          note: "Review the ATS resume checklist video and mark each item.",
        },
        {
          id: "w14-res-2",
          title: "GitHub Pages — Official Guide",
          type: "Documentation",
          url: "https://pages.github.com/",
          note: "Publish your portfolio at yourusername.github.io.",
        },
        {
          id: "w14-res-3",
          title: "Kaggle — Classification Datasets",
          type: "Repo",
          url: "https://www.kaggle.com/datasets",
          note: "Pick a small, clean classification dataset.",
        },
      ],

      communityCallout: {
        title: "Launch & Share",
        items: [
          "Share your portfolio and project repo on your professional network.",
          "Ask one person to review your ATS resume for clarity.",
        ],
      },

      assignments: [
        {
          id: "w14-assign-1",
          title: "Bangalore Property Price Prediction",
          description:
            "Deliver a complete notebook from EDA through model evaluation for the property price dataset.",
          priority: "high",
          completed: false,
        },
        {
          id: "w14-assign-2",
          title: "Build ATS-Resume + Portfolio",
          description:
            "Produce an ATS-friendly resume and publish a portfolio site on GitHub Pages.",
          priority: "high",
          completed: false,
        },
        {
          id: "w14-assign-3",
          title: "Deploy FastAPI + Kaggle Classifier",
          description:
            "Train a classifier, serve predictions via FastAPI, and deploy it publicly.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-15",
      number: 15,
      title: "Deep Learning — Neural Networks & MLP",
      duration: "Week 15 • 28 hrs",
      icon: "dl",
      tone: "dl",
      status: "not-started",

      topics: [
        {
          id: "w15-topic-1",
          title: "Neural Network Fundamentals",
          completed: false,
          links: [
            { label: "TensorFlow DL Playlist ↗", url: "https://bit.ly/3vOZ3zV" },
          ],
          skipBadge: "Skip videos #16, 17, 29, 43, 44, 45, 48",
          subTopics: [
            { id: "w15-topic-1-a", title: "Perceptrons, weights & biases", completed: false },
            { id: "w15-topic-1-b", title: "Activation functions", completed: false },
          ],
        },
        {
          id: "w15-topic-2",
          title: "Forward & Backpropagation",
          completed: false,
          subTopics: [
            { id: "w15-topic-2-a", title: "Forward pass", completed: false },
            { id: "w15-topic-2-b", title: "Gradients & the chain rule", completed: false },
          ],
        },
        {
          id: "w15-topic-3",
          title: "Multilayer Perceptron (MLP)",
          completed: false,
          subTopics: [
            { id: "w15-topic-3-a", title: "Hidden layers & depth", completed: false },
            { id: "w15-topic-3-b", title: "Loss, optimizers & learning rate", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w15-res-1",
          title: "Deep Learning TensorFlow Playlist",
          type: "Playlist",
          url: "https://bit.ly/3vOZ3zV",
          note: "Watch the neural-network and MLP modules.",
          skipBadge: "Skip videos #16, 17, 29, 43, 44, 45, 48",
        },
        {
          id: "w15-res-2",
          title: "PyTorch Playlist",
          type: "Playlist",
          url: "https://bit.ly/3K353Qg",
          note: "Follow the same concepts in PyTorch.",
        },
      ],

      communityCallout: {
        title: "Document Your Learning",
        items: [
          "Write a one-page explanation of backpropagation in your own words.",
          "Share a diagram of an MLP with a friend.",
        ],
      },

      assignments: [
        {
          id: "w15-assign-1",
          title: "Implement & Train an MLP",
          description:
            "Build a Multilayer Perceptron, train it on a small dataset, and log the loss curve.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-16",
      number: 16,
      title: "Deep Learning — Convolutional Neural Networks",
      duration: "Week 16 • 28 hrs",
      icon: "dl",
      tone: "dl",
      status: "not-started",

      topics: [
        {
          id: "w16-topic-1",
          title: "CNN Basics",
          completed: false,
          links: [
            { label: "TensorFlow DL Playlist ↗", url: "https://bit.ly/3vOZ3zV" },
          ],
          subTopics: [
            { id: "w16-topic-1-a", title: "Convolutions & filters", completed: false },
            { id: "w16-topic-1-b", title: "Pooling & strides", completed: false },
          ],
        },
        {
          id: "w16-topic-2",
          title: "CNN Architectures & Transfer Learning",
          completed: false,
          subTopics: [
            { id: "w16-topic-2-a", title: "Common architectures (VGG, ResNet)", completed: false },
            { id: "w16-topic-2-b", title: "Transfer learning with pretrained weights", completed: false },
          ],
        },
        {
          id: "w16-topic-3",
          title: "Image Data Pipelines",
          completed: false,
          subTopics: [
            { id: "w16-topic-3-a", title: "Loading & augmenting images", completed: false },
            { id: "w16-topic-3-b", title: "Data generators & batching", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w16-res-1",
          title: "Potato Disease Classification — End-to-End Project",
          type: "Repo",
          url: "https://bit.ly/3QzkVJi",
          note: "Run the notebook to understand the full pipeline.",
        },
        {
          id: "w16-res-2",
          title: "Deep Learning TensorFlow Playlist",
          type: "Playlist",
          url: "https://bit.ly/3vOZ3zV",
          note: "Re-watch the CNN videos as needed.",
          skipBadge: "Skip videos #16, 17, 29, 43, 44, 45, 48",
        },
      ],

      communityCallout: {
        title: "Explain the Pipeline",
        items: [
          "Summarise how an image moves through a CNN.",
          "Discuss overfitting and how augmentation helps.",
        ],
      },

      assignments: [
        {
          id: "w16-assign-1",
          title: "Run the Potato Disease Classification Project",
          description:
            "Execute the end-to-end notebook and re-train the model on your machine.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-17",
      number: 17,
      title: "Deep Learning — Sequence Models (RNN, LSTM)",
      duration: "Week 17 • 28 hrs",
      icon: "dl",
      tone: "dl",
      status: "not-started",

      topics: [
        {
          id: "w17-topic-1",
          title: "Why Sequence Models",
          completed: false,
          subTopics: [
            { id: "w17-topic-1-a", title: "Sequential vs independent data", completed: false },
            { id: "w17-topic-1-b", title: "Tokenization & sequence encoding", completed: false },
          ],
        },
        {
          id: "w17-topic-2",
          title: "Recurrent Neural Networks",
          completed: false,
          subTopics: [
            { id: "w17-topic-2-a", title: "RNN cell & hidden state", completed: false },
            { id: "w17-topic-2-b", title: "Vanishing gradients", completed: false },
          ],
        },
        {
          id: "w17-topic-3",
          title: "LSTM & GRU",
          completed: false,
          subTopics: [
            { id: "w17-topic-3-a", title: "Gates & memory cells", completed: false },
            { id: "w17-topic-3-b", title: "When LSTMs outperform RNNs", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w17-res-1",
          title: "Deep Learning TensorFlow Playlist",
          type: "Playlist",
          url: "https://bit.ly/3vOZ3zV",
          note: "Watch the RNN and LSTM modules.",
          skipBadge: "Skip videos #16, 17, 29, 43, 44, 45, 48",
        },
        {
          id: "w17-res-2",
          title: "PyTorch Playlist",
          type: "Playlist",
          url: "https://bit.ly/3K353Qg",
          note: "Implement an LSTM in PyTorch.",
        },
      ],

      communityCallout: {
        title: "Talk Through the State",
        items: [
          "Explain the LSTM gate mechanism from memory.",
          "Add a sequence-model sketch to your notes.",
        ],
      },

      assignments: [
        {
          id: "w17-assign-1",
          title: "Train an LSTM on a Sequence Dataset",
          description:
            "Build an LSTM for a time-series or text-sequence task and report the results.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-18",
      number: 18,
      title: "Deep Learning — Transformers & Capstone Project",
      duration: "Week 18 • 28 hrs",
      icon: "dl",
      tone: "dl",
      status: "not-started",

      topics: [
        {
          id: "w18-topic-1",
          title: "The Attention Mechanism",
          completed: false,
          subTopics: [
            { id: "w18-topic-1-a", title: "Self-attention & QKV", completed: false },
            { id: "w18-topic-1-b", title: "Multi-head attention", completed: false },
          ],
        },
        {
          id: "w18-topic-2",
          title: "Transformer Architecture",
          completed: false,
          subTopics: [
            { id: "w18-topic-2-a", title: "Encoder & decoder stacks", completed: false },
            { id: "w18-topic-2-b", title: "Positional encoding", completed: false },
          ],
        },
        {
          id: "w18-topic-3",
          title: "Using Pretrained Transformers",
          completed: false,
          subTopics: [
            { id: "w18-topic-3-a", title: "BERT-style models", completed: false },
            { id: "w18-topic-3-b", title: "Fine-tuning for your task", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w18-res-1",
          title: "Potato Disease Classification Project",
          type: "Repo",
          url: "https://bit.ly/3QzkVJi",
          note: "Use this as the template for your own image project.",
        },
        {
          id: "w18-res-2",
          title: "PyTorch & TensorFlow Playlists",
          type: "Playlist",
          url: "https://bit.ly/3K353Qg",
          note: "Reference both for the transformer deep dive.",
        },
      ],

      communityCallout: {
        title: "Present Your Work",
        items: [
          "Record a short walkthrough of your model and deployment.",
          "Prepare a stakeholder-style summary of the results.",
        ],
      },

      assignments: [
        {
          id: "w18-assign-1",
          title: "Image Classification on Tomato Plant Images",
          description:
            "Build an image classifier using tomato plant images (instead of potato).",
          priority: "high",
          completed: false,
        },
        {
          id: "w18-assign-2",
          title: "Deploy to Azure",
          description:
            "Deploy your trained image model to Azure (instead of GCP).",
          priority: "high",
          completed: false,
        },
        {
          id: "w18-assign-3",
          title: "Stakeholder Presentation Video",
          description:
            "Create and record a stakeholder presentation video of the project and share it on LinkedIn.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-19",
      number: 19,
      title: "Specialization Tracks — Choose One",
      duration: "Week 19 • 4 hrs",
      icon: "star",
      tone: "genai",
      status: "not-started",
      banner: "Choose Your Specialization Track — NLP OR Computer Vision. Pick ONE track to focus Weeks 19–21.",

      topics: [
        {
          id: "w19-topic-1",
          title: "Track 1 — Natural Language Processing (NLP)",
          completed: false,
          subTopics: [
            { id: "w19-topic-1-a", title: "Regex & text processing", completed: false },
            { id: "w19-topic-1-b", title: "Text representation (CountVectorizer, TF-IDF, BOW, Word2Vec, embeddings)", completed: false },
            { id: "w19-topic-1-c", title: "Text classification with Naïve Bayes", completed: false },
            { id: "w19-topic-1-d", title: "spaCy & NLTK fundamentals", completed: false },
          ],
        },
        {
          id: "w19-topic-2",
          title: "Track 2 — Computer Vision (CV)",
          completed: false,
          subTopics: [
            { id: "w19-topic-2-a", title: "Practical retail shelf / inventory item counting", completed: false },
            { id: "w19-topic-2-b", title: "Image processing (filtering, edge detection, scaling, rotation)", completed: false },
            { id: "w19-topic-2-c", title: "OpenCV & YOLO", completed: false },
            { id: "w19-topic-2-d", title: "Data preprocessing & augmentation (CNN covered in Deep Learning)", completed: false },
          ],
        },
      ],

      communityCallout: {
        title: "Decide & Commit",
        items: [
          "Review both tracks and pick the one that matches your interest and goals.",
          "Tell a peer which track you chose and why.",
        ],
      },

      assignments: [
        {
          id: "w19-assign-1",
          title: "Commit to a Specialization",
          description:
            "Choose either the NLP track or the CV track and record your decision.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-20",
      number: 20,
      title: "Specialization Track — Natural Language Processing",
      duration: "Week 20 • 28 hrs",
      icon: "ml",
      tone: "ml",
      status: "not-started",
      banner: "Chosen Track — NLP. Complete this track end-to-end.",

      topics: [
        {
          id: "w20-topic-1",
          title: "Regex & Text Cleaning",
          completed: false,
          subTopics: [
            { id: "w20-topic-1-a", title: "Patterns, groups, flags", completed: false },
            { id: "w20-topic-1-b", title: "Cleaning pipelines", completed: false },
          ],
        },
        {
          id: "w20-topic-2",
          title: "Text Representation",
          completed: false,
          links: [
            { label: "NLP Playlist ↗", url: "https://bit.ly/3XnjfEZ" },
          ],
          skipBadge: "Skip S3 E2 (End to End NLP Project)",
          subTopics: [
            { id: "w20-topic-2-a", title: "CountVectorizer, TF-IDF, BOW", completed: false },
            { id: "w20-topic-2-b", title: "Word2Vec & embeddings", completed: false },
          ],
        },
        {
          id: "w20-topic-3",
          title: "Text Classification with Naïve Bayes",
          completed: false,
        },
        {
          id: "w20-topic-4",
          title: "spaCy & NLTK Fundamentals",
          completed: false,
        },
      ],

      resources: [
        {
          id: "w20-res-1",
          title: "NLP YouTube Playlist",
          type: "Playlist",
          url: "https://bit.ly/3XnjfEZ",
          note: "Complete the playlist exercises.",
          skipBadge: "Skip S3 E2 (End to End NLP Project)",
        },
        {
          id: "w20-res-2",
          title: "Log Classification System Project",
          type: "Repo",
          url: "https://bit.ly/4hu5EoL",
          note: "Hybrid regex, BERT, Logistic Regression, LLM, DBSCAN clustering, FastAPI backend.",
        },
      ],

      communityCallout: {
        title: "Share Your Build",
        items: [
          "Post a short demo of your text classifier.",
          "Answer one NLP question in a community.",
        ],
      },

      assignments: [
        {
          id: "w20-assign-1",
          title: "Complete NLP Playlist Exercises",
          description:
            "Finish all exercises from the NLP playlist: https://bit.ly/3XnjfEZ",
          priority: "high",
          completed: false,
        },
        {
          id: "w20-assign-2",
          title: "Build the Log Classification System",
          description:
            "Recreate the hybrid system (regex + BERT + Logistic Regression + LLM + DBSCAN + FastAPI).",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-21",
      number: 21,
      title: "Specialization Track — Computer Vision",
      duration: "Week 21 • 28 hrs",
      icon: "data",
      tone: "sql",
      status: "not-started",
      banner: "Chosen Track — Computer Vision. Complete this track end-to-end.",

      topics: [
        {
          id: "w21-topic-1",
          title: "Retail Shelf / Inventory Item Counting",
          completed: false,
          subTopics: [
            { id: "w21-topic-1-a", title: "Define the counting use case (neutral description)", completed: false },
            { id: "w21-topic-1-b", title: "Object detection + counting metrics", completed: false },
          ],
        },
        {
          id: "w21-topic-2",
          title: "Basic Image Processing",
          completed: false,
          links: [
            { label: "OpenCV Tutorials ↗", url: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html" },
          ],
          subTopics: [
            { id: "w21-topic-2-a", title: "Filtering & edge detection", completed: false },
            { id: "w21-topic-2-b", title: "Image scaling & rotation", completed: false },
          ],
        },
        {
          id: "w21-topic-3",
          title: "OpenCV & YOLO",
          completed: false,
          subTopics: [
            { id: "w21-topic-3-a", title: "OpenCV pipelines", completed: false },
            { id: "w21-topic-3-b", title: "YOLO object detection", completed: false },
          ],
        },
        {
          id: "w21-topic-4",
          title: "Data Preprocessing & Augmentation",
          completed: false,
          subTopics: [
            { id: "w21-topic-4-a", title: "Resizing, normalization, batching", completed: false },
            { id: "w21-topic-4-b", title: "Augmentation strategies", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w21-res-1",
          title: "OpenCV Official Tutorials",
          type: "Documentation",
          url: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html",
          note: "Work through the core image-processing modules.",
        },
        {
          id: "w21-res-2",
          title: "Potato Disease Classification Project",
          type: "Repo",
          url: "https://bit.ly/3QzkVJi",
          note: "Reuse the CNN pipeline for your CV projects.",
        },
      ],

      communityCallout: {
        title: "Showcase the Use Case",
        items: [
          "Describe your inventory-counting approach without naming any company.",
          "Share a sample prediction or annotation.",
        ],
      },

      assignments: [
        {
          id: "w21-assign-1",
          title: "Build an Inventory-Counting Prototype",
          description:
            "Detect and count items in shelf images using OpenCV/YOLO.",
          priority: "high",
          completed: false,
        },
        {
          id: "w21-assign-2",
          title: "Data Augmentation Pipeline",
          description:
            "Implement an augmentation pipeline and measure its effect on model performance.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-22",
      number: 22,
      title: "Gen AI — LLMs, Embeddings & Vector Databases",
      duration: "Week 22 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w22-topic-1",
          title: "How LLMs Work",
          completed: false,
          links: [
            { label: "Gen AI Crash Course ↗", url: "https://bit.ly/3Fn7Zoh" },
          ],
          subTopics: [
            { id: "w22-topic-1-a", title: "Tokenization & next-token prediction", completed: false },
            { id: "w22-topic-1-b", title: "Scaling laws", completed: false },
          ],
        },
        {
          id: "w22-topic-2",
          title: "Embeddings",
          completed: false,
          subTopics: [
            { id: "w22-topic-2-a", title: "What embeddings represent", completed: false },
            { id: "w22-topic-2-b", title: "Embedding models & similarity", completed: false },
          ],
        },
        {
          id: "w22-topic-3",
          title: "Vector Databases",
          completed: false,
          subTopics: [
            { id: "w22-topic-3-a", title: "Indexing & nearest-neighbour search", completed: false },
            { id: "w22-topic-3-b", title: "Choosing a vector DB", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w22-res-1",
          title: "Gen AI Crash Course",
          type: "Course",
          url: "https://bit.ly/3Fn7Zoh",
          note: "Complete the crash course first.",
        },
      ],

      communityCallout: {
        title: "Concept Recap",
        items: [
          "Explain the difference between a token and an embedding.",
          "Sketch a document-to-vector pipeline.",
        ],
      },

      assignments: [
        {
          id: "w22-assign-1",
          title: "Build a Mini Embedding Search",
          description:
            "Embed a small corpus and implement a similarity search over it.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-23",
      number: 23,
      title: "Gen AI — RAG, LangChain & MCP",
      duration: "Week 23 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w23-topic-1",
          title: "Retrieval Augmented Generation (RAG)",
          completed: false,
          subTopics: [
            { id: "w23-topic-1-a", title: "Retrieve → augment → generate", completed: false },
            { id: "w23-topic-1-b", title: "Chunking & retrieval quality", completed: false },
          ],
        },
        {
          id: "w23-topic-2",
          title: "LangChain Framework",
          completed: false,
          subTopics: [
            { id: "w23-topic-2-a", title: "Chains & memory", completed: false },
            { id: "w23-topic-2-b", title: "Document loaders & retrievers", completed: false },
          ],
        },
        {
          id: "w23-topic-3",
          title: "Model Context Protocol (MCP)",
          completed: false,
          links: [
            { label: "What is MCP ↗", url: "https://youtu.be/tzrwxLNHtRY" },
            { label: "Build your MCP server ↗", url: "https://youtu.be/jLM6n4mdRuA" },
          ],
          subTopics: [
            { id: "w23-topic-3-a", title: "What MCP is", completed: false },
            { id: "w23-topic-3-b", title: "Building your own MCP server", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w23-res-1",
          title: "What is MCP (Video)",
          type: "Video",
          url: "https://youtu.be/tzrwxLNHtRY",
          note: "Short conceptual overview.",
        },
        {
          id: "w23-res-2",
          title: "Build Your MCP Server (Video)",
          type: "Video",
          url: "https://youtu.be/jLM6n4mdRuA",
          note: "Follow along hands-on.",
        },
      ],

      communityCallout: {
        title: "Build & Share",
        items: [
          "Publish your RAG app and share the link.",
          "Explain RAG to a peer in simple terms.",
        ],
      },

      assignments: [
        {
          id: "w23-assign-1",
          title: "Build a RAG Application",
          description:
            "Create a RAG app over your own documents with retrieval + generation.",
          priority: "high",
          completed: false,
        },
        {
          id: "w23-assign-2",
          title: "Stand Up an MCP Server",
          description:
            "Implement a minimal MCP server and connect it to a client.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-24",
      number: 24,
      title: "Gen AI — Agentic Frameworks & Fine-Tuning",
      duration: "Week 24 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w24-topic-1",
          title: "Agentic Frameworks",
          completed: false,
          links: [
            { label: "LangGraph Tutorial ↗", url: "https://www.youtube.com/watch?v=CnXdddeZ4tQ" },
            { label: "CrewAI Tutorial ↗", url: "https://www.youtube.com/watch?v=G42J2MSKvc8" },
          ],
          subTopics: [
            { id: "w24-topic-1-a", title: "LangGraph: stateful agent graphs", completed: false },
            { id: "w24-topic-1-b", title: "CrewAI: role-based crews", completed: false },
          ],
        },
        {
          id: "w24-topic-2",
          title: "LLM Fine-Tuning",
          completed: false,
          links: [
            { label: "Fine-Tuning Video ↗", url: "https://youtu.be/lIvORO248Zs" },
          ],
          subTopics: [
            { id: "w24-topic-2-a", title: "When to fine-tune vs prompt-engineer", completed: false },
            { id: "w24-topic-2-b", title: "Dataset preparation & training", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w24-res-1",
          title: "Agentic AI Tutorial with LangGraph",
          type: "Video",
          url: "https://www.youtube.com/watch?v=CnXdddeZ4tQ",
        },
        {
          id: "w24-res-2",
          title: "CrewAI Tutorial",
          type: "Video",
          url: "https://www.youtube.com/watch?v=G42J2MSKvc8",
        },
        {
          id: "w24-res-3",
          title: "LLM Fine-Tuning",
          type: "Video",
          url: "https://youtu.be/lIvORO248Zs",
        },
      ],

      communityCallout: {
        title: "Explain Your Choice",
        items: [
          "Write a note on when you would use LangGraph vs CrewAI.",
          "Share your fine-tuning dataset choices.",
        ],
      },

      assignments: [
        {
          id: "w24-assign-1",
          title: "Build an Agent with LangGraph or CrewAI",
          description:
            "Create a small multi-step agent that uses tools to complete a task.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-25",
      number: 25,
      title: "Gen AI & Agentic AI Projects — Project 1",
      duration: "Week 25 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w25-topic-1",
          title: "Real-World LLM + RAG Project",
          completed: false,
          links: [
            { label: "Gen AI Project Playlist ↗", url: "https://bit.ly/4ilzEnX" },
          ],
          subTopics: [
            { id: "w25-topic-1-a", title: "Define the problem & dataset", completed: false },
            { id: "w25-topic-1-b", title: "Index documents into a vector DB", completed: false },
          ],
        },
        {
          id: "w25-topic-2",
          title: "Retrieval & Generation Quality",
          completed: false,
          subTopics: [
            { id: "w25-topic-2-a", title: "Evaluate answer quality", completed: false },
            { id: "w25-topic-2-b", title: "Iterate on chunking & prompts", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w25-res-1",
          title: "Gen AI Project Playlist",
          type: "Playlist",
          url: "https://bit.ly/4ilzEnX",
          note: "Choose one project to build end-to-end.",
        },
      ],

      communityCallout: {
        title: "Progress Check",
        items: [
          "Show a working demo of your retrieval step.",
          "Note the main pain points you hit.",
        ],
      },

      assignments: [
        {
          id: "w25-assign-1",
          title: "Build a RAG-Based Assistant",
          description:
            "Ship a working RAG assistant over your chosen domain documents.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-26",
      number: 26,
      title: "Gen AI & Agentic AI Projects — Project 2",
      duration: "Week 26 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w26-topic-1",
          title: "Agentic AI Project",
          completed: false,
          links: [
            { label: "Gen AI Project Playlist ↗", url: "https://bit.ly/4ilzEnX" },
          ],
          subTopics: [
            { id: "w26-topic-1-a", title: "Design the agent workflow", completed: false },
            { id: "w26-topic-1-b", title: "Wire tools & guardrails", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w26-res-1",
          title: "Gen AI Project Playlist",
          type: "Playlist",
          url: "https://bit.ly/4ilzEnX",
          note: "Build the agentic variant of the project.",
        },
      ],

      communityCallout: {
        title: "Review & Refine",
        items: [
          "Demo the agent to a peer and collect feedback.",
          "Document the tools your agent uses.",
        ],
      },

      assignments: [
        {
          id: "w26-assign-1",
          title: "Build an Agentic AI Application",
          description:
            "Create an agent that combines LLM calls with tools to complete a real task.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-27",
      number: 27,
      title: "Gen AI & Agentic AI Projects — Capstone",
      duration: "Week 27 • 28 hrs",
      icon: "genai",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w27-topic-1",
          title: "Integrated LLM + RAG + Agent Capstone",
          completed: false,
          subTopics: [
            { id: "w27-topic-1-a", title: "Combine RAG with an agent loop", completed: false },
            { id: "w27-topic-1-b", title: "Add evaluation metrics", completed: false },
          ],
        },
        {
          id: "w27-topic-2",
          title: "Packaging & Presentation",
          completed: false,
          subTopics: [
            { id: "w27-topic-2-a", title: "Write a README & demo", completed: false },
            { id: "w27-topic-2-b", title: "Prepare a short presentation", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w27-res-1",
          title: "Gen AI Project Playlist",
          type: "Playlist",
          url: "https://bit.ly/4ilzEnX",
          note: "Reference project patterns for the capstone.",
        },
      ],

      communityCallout: {
        title: "Demo Day",
        items: [
          "Record a 3-minute demo video of your capstone.",
          "Share it on your professional profiles.",
        ],
      },

      assignments: [
        {
          id: "w27-assign-1",
          title: "Deliver the Gen AI Capstone",
          description:
            "Integrate LLMs, RAG, and an agent into one polished project with evaluation.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-28",
      number: 28,
      title: "Unguided AI Project — RAG Chatbot with RBAC",
      duration: "Week 28 • 28 hrs",
      icon: "star",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w28-topic-1",
          title: "Unguided Build",
          completed: false,
          links: [
            { label: "Project Guide ↗", url: "https://bit.ly/47SttUq" },
          ],
          subTopics: [
            { id: "w28-topic-1-a", title: "Scope it yourself", completed: false },
            { id: "w28-topic-1-b", title: "Plan the architecture", completed: false },
          ],
        },
        {
          id: "w28-topic-2",
          title: "Role-Based Access Control (RBAC) Integration",
          completed: false,
          subTopics: [
            { id: "w28-topic-2-a", title: "Users, roles & permissions", completed: false },
            { id: "w28-topic-2-b", title: "Secure the chatbot endpoints", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w28-res-1",
          title: "RAG Chatbot with RBAC — Data Challenge",
          type: "Repo",
          url: "https://bit.ly/47SttUq",
          note: "Build this unguided project for resume confidence.",
        },
      ],

      communityCallout: {
        title: "Self-Directed",
        items: [
          "Set your own success criteria before starting.",
          "Keep a log of decisions you make independently.",
        ],
      },

      assignments: [
        {
          id: "w28-assign-1",
          title: "Build an End-to-End RAG Chatbot with RBAC",
          description:
            "Deliver a full-stack RAG chatbot with role-based access control.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-29",
      number: 29,
      title: "Unguided AI Project — NLP Adverse Drug Events",
      duration: "Week 29 • 28 hrs",
      icon: "star",
      tone: "genai",
      status: "not-started",

      topics: [
        {
          id: "w29-topic-1",
          title: "NLP for Adverse Drug Events",
          completed: false,
          links: [
            { label: "Data Challenge ↗", url: "https://bit.ly/43oup1y" },
          ],
          subTopics: [
            { id: "w29-topic-1-a", title: "Understand the data", completed: false },
            { id: "w29-topic-1-b", title: "Design the detection approach", completed: false },
          ],
        },
        {
          id: "w29-topic-2",
          title: "Modeling & Evaluation",
          completed: false,
          subTopics: [
            { id: "w29-topic-2-a", title: "Train & compare models", completed: false },
            { id: "w29-topic-2-b", title: "Report performance honestly", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w29-res-1",
          title: "Detect Adverse Drug Events with NLP — Challenge",
          type: "Repo",
          url: "https://bit.ly/43oup1y",
          note: "Solve it end-to-end.",
        },
      ],

      communityCallout: {
        title: "Publish the Solution",
        items: [
          "Write a short report on your methodology.",
          "Open-source your code with a clear README.",
        ],
      },

      assignments: [
        {
          id: "w29-assign-1",
          title: "Detect Adverse Drug Events Using NLP",
          description:
            "Build and evaluate an NLP system that flags adverse drug events from text.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-30",
      number: 30,
      title: "Cloud AI — Azure",
      duration: "Week 30 • 28 hrs",
      icon: "devops",
      tone: "devops",
      status: "not-started",
      banner: "Cloud skills give a strong advantage for fresher roles and are essential for experienced AI Engineer roles. Azure leads in enterprise AI job demand.",

      topics: [
        {
          id: "w30-topic-1",
          title: "Cloud Fundamentals (Azure)",
          completed: false,
          links: [
            { label: "Azure Docs ↗", url: "https://learn.microsoft.com/en-us/azure/" },
          ],
          subTopics: [
            { id: "w30-topic-1-a", title: "Resource groups, subscriptions, regions", completed: false },
            { id: "w30-topic-1-b", title: "Storage & IAM basics", completed: false },
          ],
        },
        {
          id: "w30-topic-2",
          title: "Compute & Deployment (Azure)",
          completed: false,
          subTopics: [
            { id: "w30-topic-2-a", title: "Azure Functions, App Service, AKS", completed: false },
            { id: "w30-topic-2-b", title: "Deploy a container", completed: false },
          ],
        },
        {
          id: "w30-topic-3",
          title: "AI/ML Services (Azure)",
          completed: false,
          subTopics: [
            { id: "w30-topic-3-a", title: "Azure ML & OpenAI Service", completed: false },
            { id: "w30-topic-3-b", title: "Cognitive Services", completed: false },
          ],
        },
        {
          id: "w30-topic-4",
          title: "MLOps & Monitoring (Azure)",
          completed: false,
          subTopics: [
            { id: "w30-topic-4-a", title: "Azure ML Pipelines", completed: false },
            { id: "w30-topic-4-b", title: "DevOps / GitHub Actions & model monitoring", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w30-res-1",
          title: "Azure Documentation — Get Started",
          type: "Documentation",
          url: "https://learn.microsoft.com/en-us/azure/",
          note: "Set up a free account and follow the fundamentals path.",
        },
      ],

      communityCallout: {
        title: "Real Deployment",
        items: [
          "Deploy one of your existing models or APIs to Azure.",
          "Note the practical differences you encounter.",
        ],
      },

      assignments: [
        {
          id: "w30-assign-1",
          title: "Deploy a Service to Azure",
          description:
            "Deploy an app or model endpoint to Azure and verify it runs.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-31",
      number: 31,
      title: "Cloud AI — AWS",
      duration: "Week 31 • 28 hrs",
      icon: "devops",
      tone: "devops",
      status: "not-started",

      topics: [
        {
          id: "w31-topic-1",
          title: "Cloud Fundamentals (AWS)",
          completed: false,
          links: [
            { label: "AWS Docs ↗", url: "https://docs.aws.amazon.com/" },
          ],
          subTopics: [
            { id: "w31-topic-1-a", title: "Accounts, regions, IAM", completed: false },
            { id: "w31-topic-1-b", title: "S3 storage", completed: false },
          ],
        },
        {
          id: "w31-topic-2",
          title: "Compute & Deployment (AWS)",
          completed: false,
          subTopics: [
            { id: "w31-topic-2-a", title: "Lambda, App Runner, EKS", completed: false },
            { id: "w31-topic-2-b", title: "Deploy a serverless function", completed: false },
          ],
        },
        {
          id: "w31-topic-3",
          title: "AI/ML Services (AWS)",
          completed: false,
          subTopics: [
            { id: "w31-topic-3-a", title: "SageMaker, Bedrock", completed: false },
            { id: "w31-topic-3-b", title: "AWS AI services", completed: false },
          ],
        },
        {
          id: "w31-topic-4",
          title: "MLOps & Monitoring (AWS)",
          completed: false,
          subTopics: [
            { id: "w31-topic-4-a", title: "SageMaker Pipelines", completed: false },
            { id: "w31-topic-4-b", title: "CodePipeline / CodeBuild & Model Monitor / CloudWatch", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w31-res-1",
          title: "AWS Documentation — Getting Started",
          type: "Documentation",
          url: "https://docs.aws.amazon.com/",
          note: "Follow the free-tier getting-started guides.",
        },
      ],

      communityCallout: {
        title: "Real Deployment",
        items: [
          "Deploy the same service or model to AWS for comparison.",
          "Write a short comparison of Azure vs AWS experience.",
        ],
      },

      assignments: [
        {
          id: "w31-assign-1",
          title: "Deploy a Service to AWS",
          description:
            "Deploy an app or model endpoint to AWS and verify it runs.",
          priority: "high",
          completed: false,
        },
      ],
    },

    {
      id: "week-32",
      number: 32,
      title: "Optional Skills — No-Code Agentic Tools & NoSQL",
      duration: "Week 32 • 24 hrs",
      icon: "devops",
      tone: "devops",
      status: "not-started",

      topics: [
        {
          id: "w32-topic-1",
          title: "No-Code Agentic Tool",
          completed: false,
          links: [
            { label: "n8n Docs ↗", url: "https://docs.n8n.io/" },
            { label: "Make ↗", url: "https://www.make.com/" },
            { label: "Zapier ↗", url: "https://zapier.com/" },
          ],
          subTopics: [
            { id: "w32-topic-1-a", title: "Choose at least one tool (n8n, Make, or Zapier)", completed: false },
            { id: "w32-topic-1-b", title: "Automate a workflow end-to-end", completed: false },
          ],
        },
        {
          id: "w32-topic-2",
          title: "NoSQL Database",
          completed: false,
          links: [
            { label: "MongoDB Docs ↗", url: "https://www.mongodb.com/docs/" },
          ],
          subTopics: [
            { id: "w32-topic-2-a", title: "Documents, collections, queries", completed: false },
            { id: "w32-topic-2-b", title: "Store & query app data", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w32-res-1",
          title: "n8n Documentation",
          type: "Documentation",
          url: "https://docs.n8n.io/",
          note: "Free, self-hostable option.",
        },
        {
          id: "w32-res-2",
          title: "MongoDB Documentation",
          type: "Documentation",
          url: "https://www.mongodb.com/docs/",
          note: "Work through the CRUD basics.",
        },
      ],

      communityCallout: {
        title: "Apply It",
        items: [
          "Connect your NoSQL DB to one of your projects.",
          "Automate a small personal workflow with a no-code tool.",
        ],
      },

      assignments: [
        {
          id: "w32-assign-1",
          title: "Automate a Workflow",
          description:
            "Use a no-code agentic tool to automate a real workflow.",
          priority: "medium",
          completed: false,
        },
        {
          id: "w32-assign-2",
          title: "Use MongoDB in a Project",
          description:
            "Add a MongoDB-backed feature to one of your apps.",
          priority: "medium",
          completed: false,
        },
      ],
    },

    {
      id: "week-33",
      number: 33,
      title: "Ongoing — Projects, Branding & Job Application",
      duration: "Week 33 onwards • ongoing",
      icon: "star",
      tone: "genai",
      status: "not-started",
      banner: "This is an ongoing phase: keep shipping projects, build your brand, and apply strategically.",

      topics: [
        {
          id: "w33-topic-1",
          title: "Keep Building End-to-End Projects",
          completed: false,
          subTopics: [
            { id: "w33-topic-1-a", title: "Ship one new project per cycle", completed: false },
            { id: "w33-topic-1-b", title: "Publish them with clear READMEs", completed: false },
          ],
        },
        {
          id: "w33-topic-2",
          title: "Continuous Brand Building",
          completed: false,
          subTopics: [
            { id: "w33-topic-2-a", title: "Share on LinkedIn, Kaggle & Discord", completed: false },
            { id: "w33-topic-2-b", title: "Contribute to open source regularly", completed: false },
          ],
        },
        {
          id: "w33-topic-3",
          title: "Strategic Job Applications",
          completed: false,
          subTopics: [
            { id: "w33-topic-3-a", title: "Tailor each application", completed: false },
            { id: "w33-topic-3-b", title: "Track applications & follow-ups", completed: false },
          ],
        },
        {
          id: "w33-topic-4",
          title: "Active Learning Rule",
          completed: false,
          subTopics: [
            { id: "w33-topic-4-a", title: "Spend less time consuming, more digesting", completed: false },
            { id: "w33-topic-4-b", title: "Implement and share what you learn", completed: false },
          ],
        },
      ],

      resources: [
        {
          id: "w33-res-1",
          title: "Peer Accountability — Group Study",
          type: "Community",
          url: "https://discord.gg/r42Kbuk",
          note: "Join a group-study community for accountability.",
        },
      ],

      communityCallout: {
        title: "Stay Accountable",
        items: [
          "Share weekly progress with a study group or peer.",
          "Review your portfolio and brand once a month.",
          "Keep applying: consistency beats intensity.",
        ],
      },

      assignments: [
        {
          id: "w33-assign-1",
          title: "Publish Your Next Project",
          description:
            "Build, document, and share another end-to-end project.",
          priority: "high",
          completed: false,
        },
        {
          id: "w33-assign-2",
          title: "Refresh Your Brand & Apply",
          description:
            "Update your online profiles and send a batch of tailored applications.",
          priority: "high",
          completed: false,
        },
        {
          id: "w33-assign-3",
          title: "Join a Group-Study Community",
          description:
            "Join the peer accountability community and set a weekly check-in.",
          priority: "medium",
          completed: false,
        },
      ],
    },
  ],
};
