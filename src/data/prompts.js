export const promptsData = [
  {
    label: 'Episode 02',
    title: 'TubeLinkr Bug Fix Prompts',
    description: 'The actual Devin prompts used to fix Creator Hub video visibility and username gating issues inside TubeLinkr.',
    primaryPrompt: {
      title: 'Complete Episode 02 Prompt Archive',
      file: '/prompts/ep02/episode-02-prompts.txt'
    },
    hasInitialChatGPTPrompt: false
  },
  {
    label: 'Episode 01',
    title: 'The Prompt That Started Episode 01',
    description: 'The original ChatGPT prompt used to define the robertbolgar.dev rebuild, establish the public-building direction, and generate the Devin prompts used throughout the episode.',
    primaryPrompt: {
      title: 'The Prompt That Started Episode 01',
      file: '/prompts/ep01/initial-chatgpt-prompt.txt'
    },
    secondaryPrompt: {
      title: 'Complete Episode 01 Prompt Archive',
      file: '/prompts/ep01/episode-01-prompts.txt'
    },
    hasInitialChatGPTPrompt: true
  }
];
