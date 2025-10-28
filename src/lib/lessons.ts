export interface Lesson {
  id: string
  title: string
  category: string
  description: string
  content: LessonContent[]
  exercises?: Exercise[]
}

export interface LessonContent {
  type: 'heading' | 'paragraph' | 'code' | 'list' | 'tip'
  content: string | string[]
}

export interface Exercise {
  id: string
  prompt: string
  hint: string
  evaluationCriteria: string[]
}

export const lessons: Lesson[] = [
  {
    id: 'intro-basics',
    title: 'Introduction to Prompt Engineering',
    category: 'Fundamentals',
    description: 'Learn what prompt engineering is and why it matters in the age of AI.',
    content: [
      {
        type: 'heading',
        content: 'What is Prompt Engineering?'
      },
      {
        type: 'paragraph',
        content: 'Prompt engineering is the practice of designing and refining inputs (prompts) to get the best possible outputs from AI language models. Think of it as learning to communicate effectively with AI systems to achieve your goals.'
      },
      {
        type: 'paragraph',
        content: 'Just as asking the right questions leads to better answers in human conversations, crafting effective prompts helps AI models understand your intent and generate more useful, accurate, and relevant responses.'
      },
      {
        type: 'heading',
        content: 'Why Does It Matter?'
      },
      {
        type: 'list',
        content: [
          'Saves time by getting useful responses on the first try',
          'Improves output quality and relevance',
          'Unlocks advanced AI capabilities you might not know existed',
          'Makes AI tools more reliable for professional work',
          'Reduces hallucinations and inaccurate information'
        ]
      },
      {
        type: 'tip',
        content: 'The difference between a mediocre prompt and a great one can be the difference between spending 5 minutes or 5 hours on a task.'
      }
    ],
    exercises: [
      {
        id: 'basic-intro',
        prompt: 'Write a prompt asking an AI to explain blockchain technology',
        hint: 'Think about who the explanation is for and what level of detail you need',
        evaluationCriteria: [
          'Specifies the target audience',
          'Indicates desired complexity level',
          'Clear and concise request'
        ]
      }
    ]
  },
  {
    id: 'clarity-specificity',
    title: 'Clarity and Specificity',
    category: 'Fundamentals',
    description: 'Master the foundation of effective prompts: being clear and specific.',
    content: [
      {
        type: 'heading',
        content: 'The Power of Specificity'
      },
      {
        type: 'paragraph',
        content: 'Vague prompts lead to vague responses. The more specific you are about what you want, the better the AI can deliver exactly that.'
      },
      {
        type: 'heading',
        content: 'Bad vs Good Examples'
      },
      {
        type: 'code',
        content: 'BAD: Write about marketing.\n\nGOOD: Write a 500-word blog post about content marketing strategies for B2B SaaS startups targeting enterprise clients.'
      },
      {
        type: 'paragraph',
        content: 'Notice how the good example specifies: format (blog post), length (500 words), topic (content marketing strategies), industry (B2B SaaS), company stage (startups), and target audience (enterprise clients).'
      },
      {
        type: 'heading',
        content: 'Key Elements to Specify'
      },
      {
        type: 'list',
        content: [
          'Format: essay, list, code, email, etc.',
          'Length: word count, number of items, etc.',
          'Tone: formal, casual, humorous, professional',
          'Audience: beginners, experts, children, executives',
          'Constraints: what to include or avoid',
          'Context: background information the AI needs'
        ]
      },
      {
        type: 'tip',
        content: 'When in doubt, add more context. You can always simplify, but you can\'t get back what you didn\'t ask for.'
      }
    ],
    exercises: [
      {
        id: 'specificity-practice',
        prompt: 'Transform this vague prompt into a specific one: "Help me with my resume"',
        hint: 'Specify your industry, role, experience level, and what kind of help you need',
        evaluationCriteria: [
          'Identifies specific industry or role',
          'Mentions experience level',
          'Clarifies type of help needed',
          'Provides relevant context'
        ]
      }
    ]
  },
  {
    id: 'role-context',
    title: 'Role Assignment & Context',
    category: 'Advanced Techniques',
    description: 'Learn to give AI a role and provide context for dramatically better outputs.',
    content: [
      {
        type: 'heading',
        content: 'Assigning Roles to AI'
      },
      {
        type: 'paragraph',
        content: 'One of the most powerful techniques is asking the AI to adopt a specific role or persona. This shapes how it approaches your request and the style of its response.'
      },
      {
        type: 'code',
        content: 'You are an experienced DevOps engineer with 10 years of experience in cloud infrastructure. Explain the benefits of Kubernetes to a junior developer who is familiar with Docker.'
      },
      {
        type: 'paragraph',
        content: 'By assigning the role of "experienced DevOps engineer" and specifying the audience ("junior developer familiar with Docker"), you get a response that\'s both technically sound and appropriately pitched.'
      },
      {
        type: 'heading',
        content: 'Providing Context'
      },
      {
        type: 'paragraph',
        content: 'Context is the background information that helps AI understand the bigger picture of your request. The more relevant context you provide, the more tailored the response.'
      },
      {
        type: 'list',
        content: [
          'What are you trying to accomplish?',
          'Who is this for?',
          'What has already been tried?',
          'What constraints exist?',
          'What is the desired outcome?'
        ]
      },
      {
        type: 'tip',
        content: 'Think of context as giving the AI the same information you would give a human expert you hired to help with the task.'
      }
    ],
    exercises: [
      {
        id: 'role-assignment',
        prompt: 'Write a prompt with role assignment asking for investment advice',
        hint: 'Define the AI\'s expertise, your situation, and your goals',
        evaluationCriteria: [
          'Assigns a clear role to the AI',
          'Provides personal financial context',
          'States investment goals or constraints',
          'Appropriate level of detail'
        ]
      }
    ]
  },
  {
    id: 'step-by-step',
    title: 'Step-by-Step Instructions',
    category: 'Advanced Techniques',
    description: 'Break down complex tasks into steps for more reliable results.',
    content: [
      {
        type: 'heading',
        content: 'Chain of Thought Prompting'
      },
      {
        type: 'paragraph',
        content: 'When you need the AI to solve complex problems or perform multi-step tasks, explicitly asking it to think step-by-step dramatically improves accuracy and reasoning.'
      },
      {
        type: 'code',
        content: 'Let\'s think step by step:\n1. First, analyze the problem\n2. Then, identify possible solutions\n3. Evaluate each solution\n4. Recommend the best approach\n\nProblem: Our website loads slowly on mobile devices.'
      },
      {
        type: 'paragraph',
        content: 'This technique, called "chain of thought prompting," encourages the AI to show its reasoning process, which leads to more thoughtful and accurate responses.'
      },
      {
        type: 'heading',
        content: 'When to Use Step-by-Step'
      },
      {
        type: 'list',
        content: [
          'Mathematical or logical problems',
          'Debugging code or troubleshooting',
          'Decision-making with multiple factors',
          'Planning or strategy development',
          'Analysis requiring multiple perspectives'
        ]
      },
      {
        type: 'tip',
        content: 'Adding "Let\'s think step by step" to your prompt is one of the simplest yet most effective techniques for complex reasoning tasks.'
      }
    ],
    exercises: [
      {
        id: 'step-by-step-practice',
        prompt: 'Create a step-by-step prompt for planning a product launch',
        hint: 'Break down the planning process into clear sequential steps',
        evaluationCriteria: [
          'Includes explicit step-by-step instruction',
          'Steps are logical and sequential',
          'Clear goal or outcome stated',
          'Appropriate level of detail for each step'
        ]
      }
    ]
  },
  {
    id: 'examples-shots',
    title: 'Few-Shot Learning',
    category: 'Advanced Techniques',
    description: 'Use examples to show AI exactly what you want.',
    content: [
      {
        type: 'heading',
        content: 'Learning from Examples'
      },
      {
        type: 'paragraph',
        content: 'Few-shot learning means providing examples of the desired output format or style. This is incredibly powerful when you want consistent formatting or a specific style that\'s hard to describe.'
      },
      {
        type: 'code',
        content: 'Convert these feature descriptions into benefit-focused marketing copy:\n\nExample:\nFeature: "256-bit encryption"\nBenefit: "Your data stays private and secure, protected by bank-level encryption"\n\nNow do these:\nFeature: "Real-time sync across devices"\nFeature: "Unlimited storage"'
      },
      {
        type: 'paragraph',
        content: 'By showing one or more examples, you teach the AI the exact pattern or style you want, without having to describe it in words.'
      },
      {
        type: 'heading',
        content: 'Types of Shot Learning'
      },
      {
        type: 'list',
        content: [
          'Zero-shot: No examples, just instructions',
          'One-shot: Single example provided',
          'Few-shot: Multiple examples (typically 2-5)',
          'Many-shot: Numerous examples for complex patterns'
        ]
      },
      {
        type: 'tip',
        content: 'Few-shot prompting is especially useful for formatting tasks, creative writing styles, and data transformation.'
      }
    ],
    exercises: [
      {
        id: 'few-shot-practice',
        prompt: 'Create a few-shot prompt to convert technical jargon into plain English',
        hint: 'Provide 2-3 examples showing the transformation you want',
        evaluationCriteria: [
          'Includes 2-3 clear examples',
          'Examples demonstrate the pattern well',
          'Consistent format across examples',
          'Clear instruction for new items'
        ]
      }
    ]
  },
  {
    id: 'constraints-formats',
    title: 'Constraints and Output Formats',
    category: 'Practical Applications',
    description: 'Control the structure and format of AI responses.',
    content: [
      {
        type: 'heading',
        content: 'Specifying Output Formats'
      },
      {
        type: 'paragraph',
        content: 'You can ask the AI to output information in specific formats like JSON, tables, bullet points, or custom structures. This is crucial for integrating AI into workflows and applications.'
      },
      {
        type: 'code',
        content: 'List the top 5 programming languages for web development in 2024. Format as JSON with fields: name, primaryUse, learningDifficulty (1-10), and popularFrameworks (array).'
      },
      {
        type: 'heading',
        content: 'Setting Constraints'
      },
      {
        type: 'paragraph',
        content: 'Constraints define boundaries for the response. They can be about length, style, content to include or exclude, or formatting requirements.'
      },
      {
        type: 'list',
        content: [
          'Length limits: "in under 100 words"',
          'Style requirements: "without technical jargon"',
          'Exclusions: "do not mention competitors"',
          'Inclusions: "must include three actionable tips"',
          'Format: "as a markdown table" or "in bullet points"'
        ]
      },
      {
        type: 'tip',
        content: 'Being specific about format saves you editing time and makes AI outputs ready to use immediately.'
      }
    ],
    exercises: [
      {
        id: 'format-practice',
        prompt: 'Write a prompt requesting a comparison table with specific constraints',
        hint: 'Specify what to compare, the format, and any length or style constraints',
        evaluationCriteria: [
          'Clearly specifies table format',
          'Defines what to compare',
          'Includes at least 2 constraints',
          'Realistic and achievable requirements'
        ]
      }
    ]
  },
  {
    id: 'iteration-refinement',
    title: 'Iteration and Refinement',
    category: 'Practical Applications',
    description: 'Learn to refine prompts and build on previous responses.',
    content: [
      {
        type: 'heading',
        content: 'The Iterative Approach'
      },
      {
        type: 'paragraph',
        content: 'Rarely will your first prompt be perfect. Great prompt engineering often involves iteration: starting with a basic prompt and refining it based on what you get back.'
      },
      {
        type: 'heading',
        content: 'Refinement Strategies'
      },
      {
        type: 'list',
        content: [
          'Add specificity if the response is too vague',
          'Add constraints if the response is too broad',
          'Provide examples if the style is wrong',
          'Ask for elaboration on specific parts',
          'Request different perspectives or approaches',
          'Combine multiple responses for best results'
        ]
      },
      {
        type: 'code',
        content: 'First prompt: "Explain machine learning"\n\nRefinement: "That was too technical. Explain machine learning to a 10-year-old using everyday examples like teaching a dog tricks."\n\nFurther refinement: "Great! Now add a simple example of where they might encounter ML in their daily life."'
      },
      {
        type: 'tip',
        content: 'Think of conversations with AI as collaborative. You\'re working together to get to the best output, not demanding perfection on the first try.'
      }
    ],
    exercises: [
      {
        id: 'iteration-practice',
        prompt: 'Write an initial prompt, then write two refinement prompts that improve it',
        hint: 'Show progression: basic → more specific → perfectly tailored',
        evaluationCriteria: [
          'Initial prompt is functional but basic',
          'First refinement adds meaningful constraints',
          'Second refinement further improves specificity',
          'Clear progression of improvement'
        ]
      }
    ]
  }
]