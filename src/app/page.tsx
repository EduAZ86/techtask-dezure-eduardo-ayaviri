import { Imessage } from "@/types/message.interface";
import { AudioPlayer } from "@/components/AudioPlayer";
import { MessageMapper } from "@/components/MessageMapper";

export default function Home() {
  const exampleMensage1: Imessage = {
    content: 'Este es el primer mensaje de prueba de esta aplicacion de transcripcion audio a texto',
    start: 1.005,
    end: 0,
    role: "agent"
  }
  const exampleMensage2: Imessage = {
    content: 'Este es el segundo mensaje de prueba de esta aplicacion de transcripcion audio a texto',
    start: 2.032,
    end: 0,
    role: "user"
  }
  const exampleMensage3: Imessage = {
    content: 'Este es el tercer mensaje',
    start: 4.111,
    end: 0,
    role: "agent"
  }
  const exampleConversation = [exampleMensage1, exampleMensage2, exampleMensage3]


  return (
    <main className="flex min-h-screen flex-col items-center justify-start
    p-6 md:p-12 gap-2
     ">
      <audio src="" ></audio>
      <AudioPlayer />
      <MessageMapper dataMessages={exampleConversation} />
    </main>
  );
}
