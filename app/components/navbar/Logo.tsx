'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="cursor-pointer"
      style={{ 
        // If you want to add additional styling, add it here
        display: 'flex', // For centering the image
      }}
    >
      <Image
        src="/images/logo.png" // Path to your logo image in the public folder
        alt="Continuing Care Logo"
        width={100} // Set your desired width
        height={20} // Set your desired height
        objectFit="contain" // Adjust the fit as per your requirement
      />
    </div>
  );
};

export default Logo;