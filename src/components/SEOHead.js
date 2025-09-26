import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords = "Timothy Ljunggren, Business Informatics, Developer, React, Python", 
  ogImage = "/images/me_square.png" 
}) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    
  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEOHead;