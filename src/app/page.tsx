import { MessageCard } from "@/components";
import { MessageMapper } from "@/components/MessageMapper";
import { Imessage } from "@/types/message.interface";


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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MessageMapper dataMessages={exampleConversation} />
    </main>
  );
}
