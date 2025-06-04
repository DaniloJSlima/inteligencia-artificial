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