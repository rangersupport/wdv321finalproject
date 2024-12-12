import { ComponentProps, useMemo } from 'react';
import { Image } from 'react-native';
import {Buffer} from 'buffer';


const bucket = 'vpsdummy'                             
const URL = 'https://dox4n2incl6ts.cloudfront.net/'; //'https://d3ro6c7rptz7fj.cloudfront.net/'; 

type SmartImageProps = {
imgKey: string;
width?: number;
height?: number;
} & Omit<ComponentProps<typeof Image>, 'source'>;



export default function SmartImage({ imgKey,width, height, ...imageProps }: SmartImageProps) {
    const uri = useMemo (() => {
    const imageRequest = JSON.stringify ({
    bucket,
    key: imgKey,
    edits: {
      resize : {
              width ,
              height: height,
              fit: 'cover',
      },
    },
  });

  const encoded = Buffer.from(imageRequest).toString('base64');

  return URL + encoded;
}, [imgKey]);


 return <Image source={{ uri }} {...imageProps} />;
}




