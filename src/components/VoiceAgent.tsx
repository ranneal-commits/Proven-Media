import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, PhoneCall, X } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

export default function VoiceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Idle");
  const audioRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onresult = async (event: any) => {
          const text = event.results[0][0].transcript;
          setTranscript(text);
          await handleVoiceInput(text);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setStatus("Error: " + event.error);
          setIsRecording(false);
        };

        recognitionRef.current.onend = () => {
          setIsRecording(false);
        };
      }
    }
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      setStatus("Processing...");
    } else {
      setTranscript("");
      recognitionRef.current?.start();
      setIsRecording(true);
      setStatus("Listening...");
    }
  };

  const playPCM = async (base64Data: string) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const binaryString = window.atob(base64Data);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      // Convert 16-bit PCM to Float32
      const int16Array = new Int16Array(bytes.buffer);
      const float32Array = new Float32Array(int16Array.length);
      for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 32768.0;
      }
      
      const audioBuffer = audioCtx.createBuffer(1, float32Array.length, 24000);
      audioBuffer.getChannelData(0).set(float32Array);
      
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.onended = () => setStatus("Idle");
      source.start(0);
      
      audioRef.current = source;
    } catch (e) {
      console.error("Audio playback error:", e);
      setStatus("Error playing audio");
    }
  };

  const handleVoiceInput = async (text: string) => {
    setStatus("Thinking...");
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });
      
      const systemInstruction = `
        You are an AI Voice Agent for Proven Media Team.
        You must:
        - Speak naturally
        - Use short, clear sentences
        - Sound calm, professional, confident
        - Avoid robotic phrasing
        - Never say you are "just an AI"
        
        Answer FAQs from verified business knowledge only.
        Services: Social media management, Short-form and long-form video production, Meta Ads management, SEO & hashtag optimization, Google Business Profile setup & optimization, AI Landing Pages, AI Chatbot integration, AI Voice Agent setup, Funnel builds, CRM integration, Strategy audits, KPI dashboards.
        Pricing: Basic ($595), Premium ($795), Elite (Starting at $1,495).
        If unsure of pricing or scope, say: "Let me confirm that for you."
        Never invent data.
      `;

      const chatResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: text,
        config: { systemInstruction },
      });

      const replyText = chatResponse.text || "I'm sorry, I didn't catch that.";

      const ttsResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: replyText }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Zephyr" },
            },
          },
        },
      });

      const audioBase64 = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (audioBase64) {
        setStatus("Speaking...");
        await playPCM(audioBase64);
      } else {
        setStatus("Error generating audio");
      }
    } catch (error) {
      console.error(error);
      setStatus("Connection Error");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-accent2-hover text-white p-4 rounded-full shadow-2xl hover:bg-accent2 transition-transform hover:scale-105 flex items-center justify-center"
      >
        <PhoneCall size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 bg-primary text-white w-[300px] rounded-3xl shadow-2xl border border-primary-hover overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="p-4 flex justify-between items-center border-b border-primary-hover">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent1 rounded-full animate-pulse" />
          <span className="font-semibold text-sm tracking-wide">
            AI VOICE AGENT
          </span>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            if (audioRef.current) {
               if (audioRef.current.stop) audioRef.current.stop();
               if (audioRef.current.pause) audioRef.current.pause();
            }
            if (isRecording) recognitionRef.current?.stop();
          }}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
        <div className="text-neutral-400 text-sm mb-8 text-center h-12 flex items-center justify-center">
          {status === "Listening..." ? (
            <span className="text-accent1 animate-pulse">Listening...</span>
          ) : status === "Thinking..." ? (
            <span className="text-neutral-300">Processing...</span>
          ) : status === "Speaking..." ? (
            <div className="flex gap-1 items-center">
              <div
                className="w-1 h-4 bg-accent1 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-1 h-6 bg-accent1 rounded-full animate-bounce"
                style={{ animationDelay: "100ms" }}
              />
              <div
                className="w-1 h-4 bg-accent1 rounded-full animate-bounce"
                style={{ animationDelay: "200ms" }}
              />
            </div>
          ) : (
            <span>Tap to speak</span>
          )}
        </div>

        <button
          onClick={toggleRecording}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording
              ? "bg-red-500/20 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
              : "bg-accent1/20 text-accent1 hover:bg-accent1/30"
          }`}
        >
          {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
        </button>

        {transcript && (
          <p className="mt-6 text-xs text-neutral-500 text-center max-w-[200px] truncate">
            "{transcript}"
          </p>
        )}
      </div>
    </div>
  );
}
