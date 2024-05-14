// import { wisperTranscription } from '@/services/wisperTranscription';
// import { NextRequest, NextResponse } from 'next/server'

// export const POST = async (req: NextRequest) => {

//     try {
//         const formData = await req.formData()
//         const audio = formData.get('file') as File
//         console.log(audio);

//         const transcription = await wisperTranscription(audio);

//         return NextResponse.json({ data: transcription }, { status: 200 })
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 })
//     }
// }

