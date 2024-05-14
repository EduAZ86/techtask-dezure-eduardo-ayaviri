'use client'
import { AudioPlayer } from "@/components/AudioPlayer";
import messagesJson from '../constants/fakeTranscription.json';
import { ITranscribedMessage, TRole } from "@/types/transcribedMessage.interface";
import { TranscribedMessage } from "@/class/TranscribedMessage.class";
import { MessageMapper } from "@/components/MessageMapper";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwticher";
export default function Home() {

  const transcribedMessages: ITranscribedMessage[] = messagesJson.map((message) => {
    return new TranscribedMessage({
      content: message.content,
      role: message.role as TRole,
      start: message.start,
      end: message.end
    })
  })


  return (
    <main className="flex min-h-screen flex-col items-center justify-start
    p-6 md:p-12 gap-2
     ">
      <ThemeSwitcher />
      <AudioPlayer />
      <MessageMapper dataMessages={transcribedMessages} />
    </main>
  );
}
