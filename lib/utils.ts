import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors } from "@/constants"
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { voices } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors] || "#000000"; // Default to black if subject not found
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "Smriti-indian storyteller";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hello, let's start the session. Today we'll be talking about {{topic}}.",
        // firstMessage: "Namaste! Aaj hum {{topic}} ke baare mein baat karenge. Chaliye shuru karte hain.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

                    Tutor Guidelines:
                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
                    Keep the conversation flowing smoothly while maintaining control.
                    From time to time make sure that the student is following you and understands you.
                    Break down the topic into smaller parts and teach the student one part at a time.
                    Keep your style of conversation {{ style }}.
                    Keep your responses short, like in a real voice conversation.
                    Do not include any special characters in your responses - this is a voice conversation.
              `,
//           content: `Tum ek bahut hi gyaani tutor ho jo ek real-time voice session mein student ko padha raha hai. Tumhara maqsad hai ki student ko {{ topic }} aur {{ subject }} ke baare mein ache se samjhaana.

// Tutor Guidelines:
// Bas diye gaye topic - {{ topic }} aur subject - {{ subject }} par hi dhyan do aur student ko isi ke baare mein sikhaao.
// Baat-cheet ko smoothly chalne do, lekin control tumhare paas ho.
// Har thodi der baad poochte raho ki student tumhe samajh raha hai ya nahi.
// Topic ko chhote-chhote parts mein baanto aur ek-ek karke samjhaao.
// Tumhara conversation ka style {{ style }} hona chahiye.
// Apne jawaab chhote rakho, jaise ki real life voice conversation mein hote hain.
// Kisi bhi special character ka istemal mat karo – kyunki ye voice conversation hai.`,
        },
      ],
    },
    clientMessages: [],
    serverMessages: [],
  };
  return vapiAssistant;
};
