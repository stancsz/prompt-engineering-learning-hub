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
  },
  {
    id: 'temperature-control',
    title: 'Understanding Temperature and Creativity',
    category: 'Advanced Techniques',
    description: 'Learn how to control the creativity vs. consistency of AI outputs.',
    content: [
      {
        type: 'heading',
        content: 'What is Temperature?'
      },
      {
        type: 'paragraph',
        content: 'Temperature is a parameter that controls randomness in AI responses. Low temperature (0-0.3) makes outputs more deterministic and focused, while high temperature (0.7-1.0) makes them more creative and varied.'
      },
      {
        type: 'heading',
        content: 'When to Use Different Temperatures'
      },
      {
        type: 'list',
        content: [
          'Low (0-0.3): Factual answers, code generation, data extraction, analysis',
          'Medium (0.4-0.6): Balanced responses, explanations, general writing',
          'High (0.7-1.0): Creative writing, brainstorming, diverse ideas, storytelling'
        ]
      },
      {
        type: 'code',
        content: 'For factual task: "List the capital cities of European countries" (use low temperature)\n\nFor creative task: "Write a unique marketing slogan for a coffee shop" (use high temperature)'
      },
      {
        type: 'tip',
        content: 'Even if you can\'t directly set temperature, you can hint at it in your prompt: "Give me the most accurate answer" (low) vs. "Be creative and think outside the box" (high).'
      }
    ],
    exercises: [
      {
        id: 'temperature-practice',
        prompt: 'Write two prompts for generating product names: one optimized for consistency, one for creativity',
        hint: 'Use language that implies deterministic vs. creative outputs',
        evaluationCriteria: [
          'First prompt emphasizes accuracy/consistency',
          'Second prompt encourages creativity/variety',
          'Both are clear and specific',
          'Appropriate for their respective goals'
        ]
      }
    ]
  },
  {
    id: 'negative-prompting',
    title: 'Negative Prompting',
    category: 'Advanced Techniques',
    description: 'Use negative instructions to avoid unwanted content in responses.',
    content: [
      {
        type: 'heading',
        content: 'What is Negative Prompting?'
      },
      {
        type: 'paragraph',
        content: 'Negative prompting means explicitly telling the AI what NOT to include or do. This is particularly useful when you need to avoid certain topics, styles, or common mistakes.'
      },
      {
        type: 'code',
        content: 'Write a product description for wireless earbuds.\n\nDO NOT:\n- Use technical jargon\n- Mention competitor brands\n- Include pricing information\n- Make unverifiable claims\n\nDO:\n- Focus on lifestyle benefits\n- Use simple, clear language\n- Highlight unique features'
      },
      {
        type: 'heading',
        content: 'Common Use Cases'
      },
      {
        type: 'list',
        content: [
          'Avoiding sensitive topics in content generation',
          'Preventing common AI mistakes or hallucinations',
          'Excluding certain writing styles or tones',
          'Steering clear of clichés or overused phrases',
          'Maintaining brand guidelines and restrictions'
        ]
      },
      {
        type: 'tip',
        content: 'Combine positive and negative instructions for maximum control: tell the AI what you want AND what you don\'t want.'
      }
    ],
    exercises: [
      {
        id: 'negative-prompt-practice',
        prompt: 'Write a prompt for a blog post that includes both positive and negative instructions',
        hint: 'Be specific about what to include and what to avoid',
        evaluationCriteria: [
          'Includes clear positive instructions',
          'Includes specific negative instructions',
          'Both sets of instructions are relevant',
          'Well-balanced and comprehensive'
        ]
      }
    ]
  },
  {
    id: 'prompt-chaining',
    title: 'Prompt Chaining',
    category: 'Advanced Techniques',
    description: 'Break complex tasks into sequences of simpler prompts.',
    content: [
      {
        type: 'heading',
        content: 'What is Prompt Chaining?'
      },
      {
        type: 'paragraph',
        content: 'Prompt chaining means using the output of one prompt as the input for another. This allows you to tackle complex, multi-stage tasks by breaking them into manageable steps.'
      },
      {
        type: 'code',
        content: 'Step 1: "Brainstorm 10 blog post topics about sustainable living"\n\nStep 2: "Take topic #3 from the previous list and create a detailed outline with 5 main sections"\n\nStep 3: "Write the introduction section from the outline, 200 words, engaging tone"'
      },
      {
        type: 'heading',
        content: 'Benefits of Chaining'
      },
      {
        type: 'list',
        content: [
          'Better quality through focused, single-purpose prompts',
          'Easier to debug and refine individual steps',
          'More control over the entire process',
          'Ability to review and adjust between steps',
          'Handles tasks too complex for a single prompt'
        ]
      },
      {
        type: 'tip',
        content: 'Plan your chain backwards: start with the final output you want, then work backwards to identify the steps needed to get there.'
      }
    ],
    exercises: [
      {
        id: 'chaining-practice',
        prompt: 'Design a 3-step prompt chain for creating a marketing campaign',
        hint: 'Each step should build on the previous one',
        evaluationCriteria: [
          'Three distinct, sequential steps',
          'Each step has a clear purpose',
          'Steps logically build on each other',
          'Final output is clearly defined'
        ]
      }
    ]
  },
  {
    id: 'persona-prompting',
    title: 'Advanced Persona Techniques',
    category: 'Advanced Techniques',
    description: 'Master the art of creating detailed, effective personas.',
    content: [
      {
        type: 'heading',
        content: 'Beyond Basic Roles'
      },
      {
        type: 'paragraph',
        content: 'While basic role assignment is powerful, advanced persona techniques involve creating rich, multi-dimensional personas with specific traits, backgrounds, and perspectives that shape responses in nuanced ways.'
      },
      {
        type: 'code',
        content: 'You are Maria, a senior UX designer at a Fortune 500 company with 15 years of experience. You\'re known for advocating for accessibility and have a background in psychology. You tend to ask probing questions and reference research studies. You\'re reviewing a mobile app design for a banking application.\n\nWhat are your thoughts on this login screen design?'
      },
      {
        type: 'heading',
        content: 'Elements of Strong Personas'
      },
      {
        type: 'list',
        content: [
          'Professional background and expertise level',
          'Specific knowledge domains or specializations',
          'Communication style and personality traits',
          'Values and priorities in their work',
          'Unique perspective or approach to problems',
          'Relevant constraints or considerations they would have'
        ]
      },
      {
        type: 'tip',
        content: 'The more specific and consistent your persona, the more consistent and authentic the AI\'s responses will be throughout a conversation.'
      }
    ],
    exercises: [
      {
        id: 'persona-advanced',
        prompt: 'Create a detailed persona prompt for getting advice on a career transition',
        hint: 'Include background, expertise, personality traits, and communication style',
        evaluationCriteria: [
          'Specific professional background',
          'Relevant expertise defined',
          'Personality traits included',
          'Clear communication style indicated'
        ]
      }
    ]
  },
  {
    id: 'meta-prompting',
    title: 'Meta-Prompting',
    category: 'Advanced Techniques',
    description: 'Ask AI to help you write better prompts.',
    content: [
      {
        type: 'heading',
        content: 'What is Meta-Prompting?'
      },
      {
        type: 'paragraph',
        content: 'Meta-prompting is using AI to help you create or improve prompts. Instead of struggling to write the perfect prompt, you can ask the AI to help you craft one based on your goals.'
      },
      {
        type: 'code',
        content: 'I want to create a prompt that will help me write compelling product descriptions for an e-commerce site selling outdoor gear. The descriptions should be SEO-friendly, highlight benefits over features, and be around 150 words. Can you help me write an effective prompt template I can reuse?'
      },
      {
        type: 'paragraph',
        content: 'The AI can suggest improvements, identify missing elements, or create reusable templates that you can adapt for multiple uses.'
      },
      {
        type: 'heading',
        content: 'Meta-Prompting Applications'
      },
      {
        type: 'list',
        content: [
          'Creating reusable prompt templates',
          'Improving existing prompts that aren\'t working well',
          'Learning what makes prompts effective',
          'Discovering techniques you might not know',
          'Adapting prompts for different AI models'
        ]
      },
      {
        type: 'tip',
        content: 'Meta-prompting is particularly useful when you\'re new to a domain and aren\'t sure what information the AI needs to give good responses.'
      }
    ],
    exercises: [
      {
        id: 'meta-prompt-practice',
        prompt: 'Write a meta-prompt asking the AI to help you create a prompt for a specific task',
        hint: 'Explain your goal, constraints, and what kind of help you need',
        evaluationCriteria: [
          'Clear explanation of the end goal',
          'Specific constraints or requirements mentioned',
          'Asks for concrete help with prompt creation',
          'Provides enough context for useful assistance'
        ]
      }
    ]
  },
  {
    id: 'comparative-analysis',
    title: 'Comparative Analysis Prompts',
    category: 'Practical Applications',
    description: 'Structure prompts to get high-quality comparisons and evaluations.',
    content: [
      {
        type: 'heading',
        content: 'Structuring Comparisons'
      },
      {
        type: 'paragraph',
        content: 'When you need to compare options, technologies, strategies, or anything else, structured prompts ensure you get balanced, comprehensive analysis across consistent criteria.'
      },
      {
        type: 'code',
        content: 'Compare React, Vue, and Angular for building a medium-sized e-commerce application.\n\nEvaluate each on:\n- Learning curve for developers familiar with JavaScript\n- Community support and ecosystem\n- Performance for this use case\n- Long-term maintenance considerations\n\nFormat as a table with scores (1-10) and brief explanations.'
      },
      {
        type: 'heading',
        content: 'Key Elements'
      },
      {
        type: 'list',
        content: [
          'Clearly identify what is being compared',
          'Specify evaluation criteria explicitly',
          'Define the context or use case',
          'Request a specific output format',
          'Ask for both pros and cons',
          'Include a recommendation or summary if needed'
        ]
      },
      {
        type: 'tip',
        content: 'Pre-defining criteria prevents the AI from cherry-picking advantages or using inconsistent measures across options.'
      }
    ],
    exercises: [
      {
        id: 'comparison-practice',
        prompt: 'Write a prompt to compare three project management methodologies',
        hint: 'Define specific, measurable criteria and desired format',
        evaluationCriteria: [
          'Three items to compare clearly stated',
          'At least 4 comparison criteria defined',
          'Context or use case provided',
          'Output format specified'
        ]
      }
    ]
  },
  {
    id: 'data-extraction',
    title: 'Data Extraction and Structuring',
    category: 'Practical Applications',
    description: 'Extract and structure information from unstructured text.',
    content: [
      {
        type: 'heading',
        content: 'Turning Text into Data'
      },
      {
        type: 'paragraph',
        content: 'AI excels at finding and extracting specific information from unstructured text and formatting it into structured data you can use in spreadsheets, databases, or applications.'
      },
      {
        type: 'code',
        content: 'Extract the following information from the customer email below and format as JSON:\n- Customer name\n- Product mentioned\n- Issue type (bug/feature request/question)\n- Sentiment (positive/neutral/negative)\n- Priority (high/medium/low)\n- Key action items\n\n[Email text here]'
      },
      {
        type: 'heading',
        content: 'Common Extraction Tasks'
      },
      {
        type: 'list',
        content: [
          'Pulling key facts from documents or articles',
          'Categorizing and tagging content',
          'Converting meeting notes to action items',
          'Extracting entities (names, dates, locations, etc.)',
          'Summarizing customer feedback into categories',
          'Creating structured datasets from research papers'
        ]
      },
      {
        type: 'tip',
        content: 'Always specify the exact output format (JSON, CSV, table, etc.) and provide a schema or example if the structure is complex.'
      }
    ],
    exercises: [
      {
        id: 'extraction-practice',
        prompt: 'Write a prompt to extract structured data from product reviews',
        hint: 'Specify what fields to extract and the output format',
        evaluationCriteria: [
          'Clear list of fields to extract',
          'Specific output format defined',
          'Appropriate for the data type',
          'Includes handling for missing data'
        ]
      }
    ]
  },
  {
    id: 'code-generation',
    title: 'Effective Code Generation',
    category: 'Practical Applications',
    description: 'Master prompts for generating clean, working code.',
    content: [
      {
        type: 'heading',
        content: 'Writing Code Prompts'
      },
      {
        type: 'paragraph',
        content: 'Generating code requires extra specificity: the language, framework, coding style, error handling requirements, and any constraints or best practices to follow.'
      },
      {
        type: 'code',
        content: 'Write a Python function using type hints that:\n- Takes a list of dictionaries representing users\n- Filters users who have been active in the last 30 days\n- Sorts by activity score (descending)\n- Returns the top 10 users\n- Includes proper error handling\n- Follows PEP 8 style guidelines\n- Add docstring with examples'
      },
      {
        type: 'heading',
        content: 'Essential Specifications'
      },
      {
        type: 'list',
        content: [
          'Programming language and version',
          'Framework or libraries to use (or avoid)',
          'Input and output formats',
          'Error handling requirements',
          'Performance considerations',
          'Code style and documentation needs',
          'Testing requirements'
        ]
      },
      {
        type: 'tip',
        content: 'For complex code, use prompt chaining: first get the architecture/approach, then implement individual functions, then integrate and test.'
      }
    ],
    exercises: [
      {
        id: 'code-prompt-practice',
        prompt: 'Write a detailed prompt for generating a REST API endpoint',
        hint: 'Include language, framework, functionality, error handling, and documentation',
        evaluationCriteria: [
          'Specifies language and framework',
          'Clear functional requirements',
          'Error handling mentioned',
          'Documentation requirements included'
        ]
      }
    ]
  },
  {
    id: 'content-repurposing',
    title: 'Content Repurposing',
    category: 'Practical Applications',
    description: 'Transform content between different formats and platforms.',
    content: [
      {
        type: 'heading',
        content: 'Multi-Format Content'
      },
      {
        type: 'paragraph',
        content: 'AI can help you repurpose content across different formats and platforms, maximizing the value of your original work. A blog post can become social media posts, a video script, an email newsletter, and more.'
      },
      {
        type: 'code',
        content: 'Take this blog post about productivity tips and create:\n1. A Twitter thread (8-10 tweets)\n2. Three LinkedIn post variations (short, medium, long)\n3. An email subject line and preview text\n4. Five Instagram carousel slide headlines\n\nMaintain the key insights but adapt tone and format for each platform.'
      },
      {
        type: 'heading',
        content: 'Repurposing Strategies'
      },
      {
        type: 'list',
        content: [
          'Blog posts → social media content',
          'Long-form → short-form summaries',
          'Technical documentation → user-friendly guides',
          'Meeting transcripts → action items and summaries',
          'Research papers → accessible articles',
          'Video scripts → written content (and vice versa)'
        ]
      },
      {
        type: 'tip',
        content: 'When repurposing, explicitly mention the target platform\'s constraints (character limits, audience expectations, format conventions).'
      }
    ],
    exercises: [
      {
        id: 'repurpose-practice',
        prompt: 'Write a prompt to repurpose a technical article for three different audiences',
        hint: 'Define each target audience and their needs clearly',
        evaluationCriteria: [
          'Three distinct audiences identified',
          'Clear adaptation requirements for each',
          'Maintains core information',
          'Appropriate format for each version'
        ]
      }
    ]
  },
  {
    id: 'tone-style-control',
    title: 'Tone and Style Mastery',
    category: 'Practical Applications',
    description: 'Precisely control the tone, style, and voice of generated content.',
    content: [
      {
        type: 'heading',
        content: 'Beyond "Professional" and "Casual"'
      },
      {
        type: 'paragraph',
        content: 'Tone and style go far beyond simple categories. You can specify emotional tone, formality level, personality traits, cultural context, and even mimic specific writing styles.'
      },
      {
        type: 'code',
        content: 'Write a product announcement email with these style characteristics:\n- Tone: Excited but not hyperbolic, professional yet warm\n- Voice: Second person, conversational but respectful\n- Style: Short sentences, active voice, scannable format\n- Emotion: Builds anticipation without overselling\n- Avoid: Marketing clichés, excessive exclamation marks, pushy language'
      },
      {
        type: 'heading',
        content: 'Tone Dimensions to Specify'
      },
      {
        type: 'list',
        content: [
          'Formality: casual, conversational, professional, formal, academic',
          'Emotion: enthusiastic, calm, urgent, empathetic, neutral',
          'Authority: authoritative, collaborative, humble, confident',
          'Complexity: simple, accessible, technical, sophisticated',
          'Personality: witty, serious, playful, straightforward',
          'Cultural context: region-specific expressions, references'
        ]
      },
      {
        type: 'tip',
        content: 'Provide examples of the desired tone rather than just labels. "Write like [specific publication or author]" can be very effective.'
      }
    ],
    exercises: [
      {
        id: 'tone-practice',
        prompt: 'Create a prompt that specifies a complex, multi-dimensional tone for customer service response',
        hint: 'Layer multiple tone attributes and provide specific guidance',
        evaluationCriteria: [
          'Multiple tone dimensions specified',
          'Clear and specific guidance',
          'Appropriate for customer service',
          'Includes examples or comparisons'
        ]
      }
    ]
  },
  {
    id: 'debugging-refinement',
    title: 'Debugging and Error Analysis',
    category: 'Practical Applications',
    description: 'Use AI to debug code, find errors, and suggest improvements.',
    content: [
      {
        type: 'heading',
        content: 'Structured Debugging Prompts'
      },
      {
        type: 'paragraph',
        content: 'When debugging, provide context about what should happen, what actually happens, what you\'ve tried, and the environment. This helps AI provide targeted, useful solutions.'
      },
      {
        type: 'code',
        content: 'Debug this Python code:\n\n[code here]\n\nExpected behavior: Should return a sorted list of unique user IDs\nActual behavior: Returns TypeError on line 23\nEnvironment: Python 3.9, running in Docker container\nWhat I\'ve tried: Added type checking, verified input format\n\nPlease:\n1. Identify the root cause\n2. Explain why it\'s happening\n3. Provide a fix with explanation\n4. Suggest how to prevent similar issues'
      },
      {
        type: 'heading',
        content: 'Elements of Good Debug Prompts'
      },
      {
        type: 'list',
        content: [
          'The problematic code in full context',
          'Error messages or unexpected behavior',
          'Expected vs. actual behavior',
          'Environment details (language version, OS, etc.)',
          'What you\'ve already tried',
          'Specific questions about the issue'
        ]
      },
      {
        type: 'tip',
        content: 'Ask for explanations along with fixes. Understanding why something broke helps you avoid similar issues in the future.'
      }
    ],
    exercises: [
      {
        id: 'debug-practice',
        prompt: 'Write a debugging prompt for a performance issue in a web application',
        hint: 'Include symptoms, context, measurements, and what you need',
        evaluationCriteria: [
          'Clear description of the performance issue',
          'Relevant context provided',
          'Specific metrics or measurements',
          'Clear ask for analysis and solutions'
        ]
      }
    ]
  },
  {
    id: 'research-synthesis',
    title: 'Research and Synthesis',
    category: 'Practical Applications',
    description: 'Synthesize information from multiple sources into coherent insights.',
    content: [
      {
        type: 'heading',
        content: 'Beyond Simple Summarization'
      },
      {
        type: 'paragraph',
        content: 'Research synthesis means combining information from multiple sources to identify patterns, contradictions, gaps, and generate new insights that aren\'t explicit in any single source.'
      },
      {
        type: 'code',
        content: 'I\'m researching remote work productivity. Analyze these three articles and:\n\n1. Identify common themes and findings\n2. Note any contradictions or disagreements\n3. Highlight unique insights from each\n4. Identify gaps not addressed by any source\n5. Synthesize into 5 key takeaways\n\n[Article summaries or key points]'
      },
      {
        type: 'heading',
        content: 'Research Synthesis Tasks'
      },
      {
        type: 'list',
        content: [
          'Identifying common themes across sources',
          'Finding contradictions or competing viewpoints',
          'Extracting unique contributions from each source',
          'Recognizing patterns and trends',
          'Identifying research gaps',
          'Creating integrated frameworks from disparate information'
        ]
      },
      {
        type: 'tip',
        content: 'When providing sources, include not just content but also metadata (author credibility, publication date, methodology) to help AI weight information appropriately.'
      }
    ],
    exercises: [
      {
        id: 'synthesis-practice',
        prompt: 'Create a prompt for synthesizing market research from multiple competitor analyses',
        hint: 'Define what to look for and how to integrate the information',
        evaluationCriteria: [
          'Clear synthesis objectives',
          'Multiple sources mentioned',
          'Specific analytical tasks defined',
          'Output format specified'
        ]
      }
    ]
  },
  {
    id: 'ethical-prompting',
    title: 'Ethical Considerations',
    category: 'Best Practices',
    description: 'Understand ethical implications and responsible AI use.',
    content: [
      {
        type: 'heading',
        content: 'Responsible Prompt Engineering'
      },
      {
        type: 'paragraph',
        content: 'As prompt engineers, we have a responsibility to use AI ethically. This means being aware of biases, respecting privacy, avoiding harmful uses, and being transparent about AI-generated content.'
      },
      {
        type: 'heading',
        content: 'Key Ethical Considerations'
      },
      {
        type: 'list',
        content: [
          'Bias awareness: Recognize and mitigate biases in prompts and outputs',
          'Privacy: Never include personal or sensitive information in prompts',
          'Transparency: Disclose when content is AI-generated where appropriate',
          'Accuracy: Verify important information, don\'t blindly trust outputs',
          'Intent: Use AI to augment human work, not to deceive or harm',
          'Attribution: Respect intellectual property and give credit'
        ]
      },
      {
        type: 'code',
        content: 'GOOD: "Generate 5 hypothetical customer personas for a fitness app"\n\nBAD: "Generate personas using this list of actual customer data: [personal information]"'
      },
      {
        type: 'tip',
        content: 'When AI gives outputs about sensitive topics (medical, legal, financial), always include disclaimers and recommend professional consultation.'
      }
    ],
    exercises: [
      {
        id: 'ethics-practice',
        prompt: 'Identify ethical concerns in a given prompt and rewrite it responsibly',
        hint: 'Look for privacy issues, bias, harmful uses, or transparency problems',
        evaluationCriteria: [
          'Identifies specific ethical concerns',
          'Provides a responsible alternative',
          'Maintains the core functionality',
          'Explains the improvements made'
        ]
      }
    ]
  },
  {
    id: 'testing-validation',
    title: 'Testing and Validation',
    category: 'Best Practices',
    description: 'Verify AI outputs and build reliable, repeatable prompts.',
    content: [
      {
        type: 'heading',
        content: 'Never Trust, Always Verify'
      },
      {
        type: 'paragraph',
        content: 'AI can make mistakes, hallucinate facts, or produce inconsistent results. Building testing and validation into your workflow is essential for reliable use of AI-generated content.'
      },
      {
        type: 'heading',
        content: 'Validation Strategies'
      },
      {
        type: 'list',
        content: [
          'Cross-reference facts with authoritative sources',
          'Test prompts multiple times to check consistency',
          'Have AI explain its reasoning for verification',
          'Use prompt variations to see if results are stable',
          'Build verification steps into your prompt chains',
          'Keep a library of tested, reliable prompts'
        ]
      },
      {
        type: 'code',
        content: 'First prompt: [Generate content]\n\nValidation prompt: "Review the above response for:\n1. Factual accuracy - cite any claims that need verification\n2. Logical consistency - identify any contradictions\n3. Completeness - note any important omissions\n4. Potential biases or assumptions"'
      },
      {
        type: 'tip',
        content: 'For critical applications, use the AI to generate, then a separate prompt to critique and verify the output before using it.'
      }
    ],
    exercises: [
      {
        id: 'validation-practice',
        prompt: 'Design a validation workflow for AI-generated technical documentation',
        hint: 'Include multiple checkpoints and verification steps',
        evaluationCriteria: [
          'Multiple validation steps defined',
          'Specific criteria for each step',
          'Addresses accuracy and completeness',
          'Practical and implementable'
        ]
      }
    ]
  },
  {
    id: 'prompt-templates',
    title: 'Building Reusable Templates',
    category: 'Best Practices',
    description: 'Create templates for consistent, efficient prompt engineering.',
    content: [
      {
        type: 'heading',
        content: 'The Power of Templates'
      },
      {
        type: 'paragraph',
        content: 'Once you\'ve crafted an effective prompt, turn it into a reusable template. Templates save time, ensure consistency, and make it easy to delegate tasks to others.'
      },
      {
        type: 'code',
        content: 'Template for blog post creation:\n\nWrite a [LENGTH]-word blog post about [TOPIC].\n\nTarget audience: [AUDIENCE]\nTone: [TONE]\nKey points to cover: [POINT1], [POINT2], [POINT3]\nSEO keyword: [KEYWORD]\nCall-to-action: [CTA]\n\nFormat:\n- Engaging headline\n- Introduction with hook\n- 3-5 main sections with H2 headers\n- Conclusion with CTA\n- Meta description (155 characters)'
      },
      {
        type: 'heading',
        content: 'Template Best Practices'
      },
      {
        type: 'list',
        content: [
          'Use clear placeholders like [VARIABLE_NAME]',
          'Include default values or examples for each variable',
          'Document what each placeholder is for',
          'Test templates with different inputs',
          'Version control templates as you improve them',
          'Share successful templates with your team'
        ]
      },
      {
        type: 'tip',
        content: 'Build a personal library of templates for your most common tasks. Over time, this becomes your most valuable prompt engineering asset.'
      }
    ],
    exercises: [
      {
        id: 'template-practice',
        prompt: 'Create a reusable template for a task you do regularly',
        hint: 'Identify variables, provide structure, include instructions',
        evaluationCriteria: [
          'Clear placeholders for variables',
          'Comprehensive structure provided',
          'Instructions are specific and actionable',
          'Easy to adapt for different uses'
        ]
      }
    ]
  },
  {
    id: 'multimodal-prompting',
    title: 'Multimodal Prompting',
    category: 'Advanced Techniques',
    description: 'Combine text, images, and other modalities in prompts.',
    content: [
      {
        type: 'heading',
        content: 'Beyond Text'
      },
      {
        type: 'paragraph',
        content: 'Modern AI models can process multiple types of input: text, images, and sometimes audio or video. Multimodal prompting combines these to create richer, more contextual requests.'
      },
      {
        type: 'heading',
        content: 'Text + Image Prompting'
      },
      {
        type: 'paragraph',
        content: 'When working with image inputs, your text prompt provides crucial context about what you want the AI to do with the image: analyze it, extract information, describe it, compare it, or answer questions about it.'
      },
      {
        type: 'code',
        content: '[Image of a website screenshot]\n\nAnalyze this website design and provide:\n1. Overall design style and aesthetic\n2. Color palette breakdown\n3. Typography choices\n4. Layout structure and grid usage\n5. Three specific improvement suggestions\n6. What user demographic this design targets'
      },
      {
        type: 'list',
        content: [
          'Image analysis and description',
          'OCR and text extraction from images',
          'Visual comparison and similarity detection',
          'Design feedback and critique',
          'Chart and diagram interpretation',
          'Real-world object identification and information'
        ]
      },
      {
        type: 'tip',
        content: 'Be as specific with image-based prompts as with text-only prompts. Tell the AI exactly what aspects of the image to focus on.'
      }
    ],
    exercises: [
      {
        id: 'multimodal-practice',
        prompt: 'Write a prompt for analyzing a product photo to generate a marketing description',
        hint: 'Specify what visual elements to extract and how to use them',
        evaluationCriteria: [
          'Clear instructions for image analysis',
          'Specific visual elements to identify',
          'Clear connection between image and output',
          'Appropriate for marketing use'
        ]
      }
    ]
  },
  {
    id: 'context-window-management',
    title: 'Context Window Management',
    category: 'Best Practices',
    description: 'Optimize prompts for AI context limits and memory.',
    content: [
      {
        type: 'heading',
        content: 'Understanding Context Windows'
      },
      {
        type: 'paragraph',
        content: 'AI models have a context window - a limit on how much text they can consider at once. This includes your prompt, conversation history, and the response. Managing this effectively is crucial for complex tasks.'
      },
      {
        type: 'heading',
        content: 'Strategies for Large Contexts'
      },
      {
        type: 'list',
        content: [
          'Summarize previous exchanges before continuing',
          'Extract and keep only relevant information',
          'Use prompt chaining instead of one massive prompt',
          'Prioritize recent and relevant context over chronological history',
          'Break documents into chunks for analysis',
          'Use reference IDs instead of repeating full content'
        ]
      },
      {
        type: 'code',
        content: 'Instead of: [Entire 50-page document] + "Summarize this"\n\nUse: "Summarize pages 1-10 focusing on [topic]"\nThen: "Now summarize pages 11-20 focusing on [topic]"\nFinally: "Given these summaries, create an integrated overview"'
      },
      {
        type: 'tip',
        content: 'When working with long conversations, periodically ask the AI to summarize the discussion so far. Use that summary to start fresh with full context.'
      }
    ],
    exercises: [
      {
        id: 'context-practice',
        prompt: 'Design a strategy for analyzing a large document that exceeds the context window',
        hint: 'Break down the task and manage context across multiple prompts',
        evaluationCriteria: [
          'Clear chunking strategy',
          'Context preservation between chunks',
          'Final synthesis step included',
          'Efficient use of context window'
        ]
      }
    ]
  },
  {
    id: 'system-prompts',
    title: 'System Prompts and Instructions',
    category: 'Advanced Techniques',
    description: 'Use system-level prompts to set persistent behavior.',
    content: [
      {
        type: 'heading',
        content: 'What Are System Prompts?'
      },
      {
        type: 'paragraph',
        content: 'System prompts (or system messages) set the overall behavior, personality, and constraints for an AI assistant. They persist across the conversation and influence all subsequent responses.'
      },
      {
        type: 'code',
        content: 'System Prompt:\n"You are a code review assistant for a Python team. You follow PEP 8 standards strictly, prioritize readability over cleverness, and always suggest adding type hints. When reviewing code, structure your feedback as: 1) Critical issues, 2) Improvements, 3) Nitpicks. Be constructive and educational in tone."\n\nUser: [Submits code for review]'
      },
      {
        type: 'heading',
        content: 'Effective System Prompt Elements'
      },
      {
        type: 'list',
        content: [
          'Role and expertise area',
          'Communication style and tone',
          'Persistent rules and constraints',
          'Output format preferences',
          'Values and priorities',
          'Behaviors to avoid',
          'How to handle uncertainty or errors'
        ]
      },
      {
        type: 'tip',
        content: 'Treat system prompts as the "constitution" for your AI assistant - they establish the foundational rules that govern all interactions.'
      }
    ],
    exercises: [
      {
        id: 'system-prompt-practice',
        prompt: 'Write a system prompt for a specialized AI assistant',
        hint: 'Define role, behavior, constraints, and output preferences',
        evaluationCriteria: [
          'Clear role definition',
          'Specific behavioral guidelines',
          'Output format specified',
          'Appropriate constraints included'
        ]
      }
    ]
  },
  {
    id: 'creative-constraints',
    title: 'Creative Constraints',
    category: 'Practical Applications',
    description: 'Use constraints to boost creativity and generate unique outputs.',
    content: [
      {
        type: 'heading',
        content: 'Constraints Fuel Creativity'
      },
      {
        type: 'paragraph',
        content: 'Counterintuitively, adding creative constraints often produces more interesting and original results than completely open-ended prompts. Constraints force the AI to think differently and avoid generic responses.'
      },
      {
        type: 'code',
        content: 'Generate 5 startup ideas for sustainable food production with these constraints:\n- Must use technology that exists today\n- Target market is urban apartment dwellers\n- Initial investment under $50k\n- Each idea must solve a different specific problem\n- Cannot rely on large outdoor spaces\n- Must be profitable within 18 months'
      },
      {
        type: 'heading',
        content: 'Types of Creative Constraints'
      },
      {
        type: 'list',
        content: [
          'Format: Haiku, acrostic, specific word count',
          'Content: Must include certain elements, avoid clichés',
          'Perspective: Write from unusual point of view',
          'Style: Mimic specific era, genre, or author',
          'Combinatorial: Merge unlikely concepts',
          'Resource: Time, budget, space limitations'
        ]
      },
      {
        type: 'tip',
        content: 'Try the "forced connection" technique: pick two random concepts and ask AI to create something that connects them in an interesting way.'
      }
    ],
    exercises: [
      {
        id: 'creative-constraints-practice',
        prompt: 'Write a creative brief with 5+ interesting constraints',
        hint: 'Mix different types of constraints for maximum effect',
        evaluationCriteria: [
          'At least 5 distinct constraints',
          'Constraints are specific and clear',
          'Mix of different constraint types',
          'Forces creative problem-solving'
        ]
      }
    ]
  },
  {
    id: 'prompt-optimization',
    title: 'Prompt Optimization Techniques',
    category: 'Best Practices',
    description: 'Systematically improve prompts for better results.',
    content: [
      {
        type: 'heading',
        content: 'Iterative Improvement'
      },
      {
        type: 'paragraph',
        content: 'Prompt optimization is the practice of systematically testing and refining prompts to improve quality, consistency, and reliability. It\'s especially important for prompts you\'ll use repeatedly.'
      },
      {
        type: 'heading',
        content: 'Optimization Process'
      },
      {
        type: 'list',
        content: [
          'Establish success criteria before testing',
          'Test with diverse inputs to check consistency',
          'Identify failure modes and edge cases',
          'A/B test different phrasings',
          'Track which techniques work best for your use cases',
          'Document learnings and create best practices',
          'Version control your prompts'
        ]
      },
      {
        type: 'code',
        content: 'Optimization Example:\n\nV1: "Write a product description"\n→ Too vague, inconsistent results\n\nV2: "Write a 150-word product description in professional tone"\n→ Better, but still generic\n\nV3: "Write a 150-word product description that leads with benefits, includes 3 specific features, uses active voice, and ends with a call-to-action. Tone: professional yet approachable."\n→ Consistent, high-quality results'
      },
      {
        type: 'tip',
        content: 'Keep a prompt journal documenting what works and what doesn\'t. Patterns will emerge that make you a better prompt engineer.'
      }
    ],
    exercises: [
      {
        id: 'optimization-practice',
        prompt: 'Take a basic prompt and show three optimization iterations with explanations',
        hint: 'Each version should address specific weaknesses from the previous',
        evaluationCriteria: [
          'Clear progression of improvements',
          'Specific changes explained',
          'Addresses real weaknesses',
          'Final version is comprehensive'
        ]
      }
    ]
  },
  {
    id: 'domain-specific',
    title: 'Domain-Specific Prompting',
    category: 'Advanced Techniques',
    description: 'Adapt techniques for specialized fields like legal, medical, or technical.',
    content: [
      {
        type: 'heading',
        content: 'Specialized Knowledge Domains'
      },
      {
        type: 'paragraph',
        content: 'Different professional domains have unique terminology, standards, and requirements. Effective domain-specific prompting requires understanding both prompt engineering and the domain itself.'
      },
      {
        type: 'heading',
        content: 'Domain Adaptations'
      },
      {
        type: 'list',
        content: [
          'Legal: Include jurisdiction, cite precedents, use precise terminology',
          'Medical: Specify patient context, reference evidence levels, include disclaimers',
          'Technical: Define tech stack, specify standards (RFC, IEEE, etc.)',
          'Financial: Include regulatory framework, risk level, time horizon',
          'Scientific: Cite methodology, specify confidence levels, peer review standards',
          'Creative: Define medium, audience, cultural context, genre conventions'
        ]
      },
      {
        type: 'code',
        content: 'Legal domain example:\n\n"Analyze this contract clause under California law, specifically addressing:\n1. Enforceability under CA Civil Code §1550\n2. Potential unconscionability issues\n3. Comparison to industry standard terms (SaaS agreements)\n4. Risk level: High/Medium/Low with reasoning\n\nDisclaimer: Include that this is not legal advice and recommend attorney review."'
      },
      {
        type: 'tip',
        content: 'Always include appropriate disclaimers for professional domains (legal, medical, financial). AI is a tool to augment expertise, not replace it.'
      }
    ],
    exercises: [
      {
        id: 'domain-practice',
        prompt: 'Write a domain-specific prompt for your field of expertise or interest',
        hint: 'Include domain terminology, standards, and appropriate disclaimers',
        evaluationCriteria: [
          'Uses appropriate domain terminology',
          'References relevant standards or frameworks',
          'Includes necessary disclaimers',
          'Shows understanding of domain requirements'
        ]
      }
    ]
  }
]