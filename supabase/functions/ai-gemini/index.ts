
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

function getPromptForTask(type: string, input: Record<string, unknown>) {
  if (type === "quiz") {
    return `You are a quiz generator focused on frontend topics. Generate a quiz (with several questions/answers) based on this context:\n${input.context}`;
  }
  if (type === "code_check") {
    return `You are a code assistant. Check the following code, explain any errors or suggest improvements:\nLanguage: ${input.language}\nCode:\n${input.code}`;
  }
  if (type === "theory") {
    return `You are a theory explainer for frontend. Respond concisely to this request:\n${input.question}`;
  }
  // fallback: echo
  return input.prompt || "Respond concisely.";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { task, ...input } = await req.json();

    const model = "gemini-1.5-flash";
    const userPrompt = getPromptForTask(task, input);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
        }),
      }
    );
    const data = await response.json();

    const aiText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.candidates?.[0]?.content?.text ||
      data.candidates?.[0]?.text ||
      data.error?.message ||
      "No answer generated.";

    return new Response(
      JSON.stringify({ result: aiText }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message || "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
