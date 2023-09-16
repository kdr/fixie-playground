/** @jsxImportSource ai-jsx */
// The above line is important and enables the edge function to run AI.JSX code.

/**
 * This code is a Vercel Edge Function that runs a simple AI.JSX ChatCompletion and streams the result.
 * This prevents your OpenAI API key from being exposed to the client.
 * Note that the edge function must be deployed with the OPENAI_API_KEY environment variable set.
 */

import { toStreamResponse } from 'ai-jsx/stream';
import { ChatCompletion, SystemMessage, UserMessage } from 'ai-jsx/core/completion';

export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the 'topic' field from the JSON body of the request.
  const { ingredients } = await req.json();

  // toStreamResponse() converts the JSX to a stream of JSON responses that can be read
  // by the client, using `useAIStream()` from `ai-jsx/react`.
  return toStreamResponse(
    <ChatCompletion>
      <SystemMessage>
        You are a chef at a Michelin star restaurant.
      </SystemMessage>
      <UserMessage>Please give me a recipe that features the following ingredients {ingredients} and staples you'd expect to find in most household kitchens or pantrys</UserMessage>
    </ChatCompletion>
  );
}
