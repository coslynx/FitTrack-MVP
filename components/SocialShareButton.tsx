import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';
import Button from './Button';

const SocialShareButton = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  const { data: session } = useSession();

  const [isSharing, setIsSharing] = useState(false);

  const handleShare = () => {
    setIsSharing(true);
    setTimeout(() => {
      setIsSharing(false);
    }, 2000);
  };

  return (
    <div className="flex gap-2">
      <FacebookShareButton url={url} quote={title} onClick={handleShare}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} onClick={handleShare}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title} onClick={handleShare}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      {isSharing && (
        <span className="text-sm text-gray-500">Sharing...</span>
      )}
    </div>
  );
};

export default SocialShareButton;