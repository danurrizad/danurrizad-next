"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useNavigation from next/navigation

// Mark the component for client-side usage only in Next.js 14 with "use client"
function ScrollToTop() {
  const navigation = useRouter(); // Use useNavigation hook

  useEffect(() => {
    // Scroll to top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [navigation]); // Depend on navigation.pathname

  return null;
}

export default ScrollToTop;
