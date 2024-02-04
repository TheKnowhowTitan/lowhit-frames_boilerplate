import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Next",
    },
  ],
  image: 'https://previews.123rf.com/images/zurijeta/zurijeta0908/zurijeta090800655/5396368-standard-brick-pattern-shape-background.jpg',
  post_url: 'your_url_here',
});

export const metadata = {
  title: 'Give a fun Title to your page',
  description: 'Give a small description of the page',
  openGraph: {
    title: 'Give your frame a crazy title',
    description: 'Give your frame a crazy description',
    images: ['https://static.vecteezy.com/system/resources/thumbnails/028/217/595/small/rendered-illustration-of-a-dark-abstract-concrete-room-illuminated-at-night-architectural-background-free-photo.jpg'],
    audio: [
      {
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        type: 'audio/mp3',
      },
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Welcome to a sample page</h1>
    </>
  );
}