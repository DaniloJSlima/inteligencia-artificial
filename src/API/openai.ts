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