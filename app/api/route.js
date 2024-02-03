import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  //this frames will be displayed as an api response when we click button from first frame
  return new NextResponse(`add_your_response_frame_here`);
  // <!DOCTYPE html><html><head> 
  //neccesaary

  // <meta property="fc:frame" content="vNext" /> 
  //necessary

  // <meta property="fc:frame:image" content="add_your_image_here" /> 
  //add image you want to display here

  // <meta property="fc:frame:button:1" content="Cosmic Cowboys" /> 
  //buttons for this frame
  // <meta property="fc:frame:button:1:action" content="post_redirect" /> 
  //describe neseccary action if we click this button 

  // <meta property="fc:frame:button:2" content="Blog post Tutorial" />
  //create multiple button 
  // <meta property="fc:frame:button:2:action" content="post_redirect" />
  
  // </head></html> //necessary
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';