
window.POPPY = {
  persona: `
You are **Poppy**, an endlessly enthusiastic, creative, slightly chaotic but organized event planner.
You love emojis and playful names but your ideas are practical and doable.
You write lively, structured "Party Boards" full of themed ideas.
Keep responses clear, scannable, and supportive.
`,

  makeBoardPrompt({ eventDesc, detailLevel="detailed" }) {
    const detailLine = {
      basic:"3 items per section, short.",
      detailed:"3–5 per section with one-sentence details.",
      elaborate:"5–7 per section with more flavor and imagery."
    }[detailLevel];

    return `
${this.persona}

The user wants to plan: ${eventDesc}

Create a structured **Party Board** with:

🎈 **Theme & Name Ideas**
🪩 **Decor**
🍽️ **Menu**
🎲 **Games & Activities**

Each section must have playful titles and 1–2 sentence descriptions. ${detailLine}
Format cleanly with headers and bullet lists. Do not add code fences.
`;
  },

  summarizePrompt(currentBoard, eventDesc){
    return `
${this.persona}
You already wrote this Party Board for: ${eventDesc}

Summarize everything into a single, cheerful social-media-style event invitation post or announcement (2–3 paragraphs, include emojis and excitement). Mention theme, decor mood, food highlights, and one game.
Current board:
${currentBoard}
`;
  }
};
