'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      style={{
        color: '#ff3366', // Reddish-pink color
        fontSize: '24px', // Larger font size
        // fontWeight: 'bold', // Bold font weight
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Text shadow for depth
        letterSpacing: '1px', // Spacing between letters
        fontFamily: 'Arial, sans-serif', // Font family
        transition: 'transform 0.3s ease', // Smooth transition for hover effect
      }}
    >
      Continuing Care
    </div>
  );
}
export default Logo;
