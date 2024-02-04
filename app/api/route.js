import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');

  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://previews.123rf.com/images/zurijeta/zurijeta0908/zurijeta090800655/5396368-standard-brick-pattern-shape-background.jpg" />
        <meta property="fc:frame:button:1" content="Next" />
        <meta property="fc:frame:button:1:action" content="post_redirect" />
        <!-- Add OpenGraph audio tags -->
        <meta property="og:audio" content="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
        <meta property="og:audio:type" content="audio/mp3">
      </head>
    </html>
  `);
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';