import { Image } from 'react-native';
import { ComponentProps } from 'react';

const S3Bucket = 'https://vpsdummy.s3.sa-east-1.amazonaws.com/' ;


//'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/';

type S3ImageProps = {
  imgKey: string;
} & Omit<ComponentProps<typeof Image>, 'source'>;

export default function S3Image({ imgKey, ...imageProps }: S3ImageProps) {
  return <Image source={{ uri: S3Bucket + imgKey }} {...imageProps} />;
}
