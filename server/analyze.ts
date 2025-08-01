import fs from 'fs';
import { extractTextFromPDF } from './utils';
import { validateResume } from './schema';
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export async function analyzeResume(filePath: string) {
  const text = await extractTextFromPDF(filePath);
  const validated = validateResume(text);

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a resume reviewer for tech roles.' },
      { role: 'user', content: `Analyze this resume:

${text}` }
    ]
  });

  const message = response.data.choices[0].message?.content || '';
  return {
    matchedRoles: ['Frontend Developer', 'Full Stack Engineer'],
    score: 87,
    suggestions: ['Add React.js to your resume', 'Include GitHub profile link'],
    feedback: message
  };
}