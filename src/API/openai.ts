import OpenAI from "openai"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
})

export async function sendMessage(messages: Message[]) {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages.map(message => (
      { role: message.role, content: message.content }
    ))
  })

  return {
    role: response.choices[0].message.role,
    content: response.choices[0].message.content || ''
  }
}