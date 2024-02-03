import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

   // buttons that you want to see in frames 
  buttons: [
    {
      label: "Next" //add your button name 
    },
    // {
    //   label: "Begin" 
    // },
    // {
    //   label: "Begin" 
    // },
    // {
    //   label: "Begin"
    // }}
    //add mulitple button 

  ],

  // link to image that will be first displayed when frames rendred
  image: 'your_image_link_here',

  //which api to call when we click next button
  post_url: 'your_url_here',
});

export const metadata = {
  title: 'Give a fun Title to your page',//these are html page attributes, chose as you want
  description: 'Give  a small description of page',
  openGraph: { //open graph is a protocaol created by facebook, frames are built on top of these protocol
    title: 'Give your frame a crazy title',
    description: 'Give your frame a crazy description',
    images: ['next image link'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}