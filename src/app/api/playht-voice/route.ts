import { NextRequest, NextResponse } from 'next/server';
import * as PlayHT from 'playht';

export async function POST(request: NextRequest) {
  try {
    const { apiKey, voiceId, text, language = 'th' } = await request.json();

    // Initialize Play.ht with your credentials
    PlayHT.init({
      apiKey: apiKey || '9a1ffef880fd4dab94c34d49267812b3',
      userId: 'your-user-id', // You need to get this from Play.ht dashboard
    });

    // Generate Thai speech
    const generated = await PlayHT.generate(text, {
      voiceEngine: 'PlayHT2.0-turbo',
      voiceId: voiceId || 'thai-lady-J0JZKhhZhpgpwebqoE3zQ',
      outputFormat: 'mp3',
      speed: 1.0,
    });

    // Stream the audio
    const audioStream = generated.audioStream;
    const chunks: Buffer[] = [];
    
    return new Promise((resolve, reject) => {
      audioStream.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });

      audioStream.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        const response = new NextResponse(audioBuffer, {
          headers: {
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.length.toString(),
          },
        });
        resolve(response);
      });

      audioStream.on('error', (error: Error) => {
        console.error('Play.ht streaming error:', error);
        reject(new NextResponse(
          JSON.stringify({ error: 'Failed to generate Thai speech' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        ));
      });
    });

  } catch (error) {
    console.error('Play.ht API error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to Play.ht Thai voice service' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}