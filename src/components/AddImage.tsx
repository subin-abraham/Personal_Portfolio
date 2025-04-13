// components/AddImage.tsx
import Image from 'next/image';
import Link from 'next/link';

interface AddImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
    redirectURL?: string;
}

const AddImage: React.FC<AddImageProps> = ({
    src,
    width,
    height,
    alt,
    className = '',
    redirectURL = ''
}) => {
    return (
        <div className={className}>
            {redirectURL ? (
                <Link href={redirectURL} target='_blank'>
                    <Image src={src} alt={alt} width={width} height={height} />
                </Link>
            ) : (
                <Image src={src} alt={alt} width={width} height={height} />
            )}
        </div>
    );
};

export default AddImage;
