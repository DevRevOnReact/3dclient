  import { useState, useEffect, useRef } from 'react';
  import { useRouter } from 'next/router';
  import cx from './style.module.scss';
import Image from 'next/image';

  interface Subpage {
    title: string;
    path: string;
    subpages?: Subpage[];
  }

  interface Page {
    title: string;
    path: string;
    subpages?: Subpage[];
  }

  interface NavbarProps {
    pages?: Page[];
    isVisible: boolean;
    onToggleVisibility: () => void;
  }

  const Navbar: React.FC<NavbarProps> = ({ pages = [], isVisible, onToggleVisibility }) => {
    const [expandedPages, setExpandedPages] = useState<string[]>([]);
    const router = useRouter();
    const [rotationAngles, setRotationAngles] = useState<Record<string, number>>({});
    const navbarRef = useRef<HTMLDivElement>(null); 
    
    useEffect(() => {
      setExpandedPages([]);
    }, [isVisible]);

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (isVisible && navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
          onToggleVisibility();
        }
      };
    
      if (isVisible) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
    
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isVisible, onToggleVisibility]);

    const toggleSubpages = (path: string) => {
      setExpandedPages((prev) =>
        prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
      );

      setRotationAngles((prev) => ({
        ...prev,
        [path]: prev[path] ? 0 : 90,
      }));
    };

    const handleLinkClick = (e: React.MouseEvent, path: string) => {
      e.preventDefault();
      toggleSubpages(path);

      router.push(path)
        .then(() => {
          // Handle success if necessary
        })
        .catch((error) => {
          // Handle errors if necessary
          console.error('Error navigating to', path, error);
        });
    };

    const renderSubpages = (subpages: Subpage[] | undefined, parentPath: string) => {
      if (!subpages) return null;

      return (
        <ul style={{display:'flex', flexDirection:'column'}}>
          {subpages.map((subpage) => (
            <li key={subpage.path} >
              <a href="#" className={cx('subpage')} onClick={(e) => { handleLinkClick(e, subpage.path); }}>
               {subpage.title}
              </a>
            
              {expandedPages.includes(subpage.path) &&
                renderSubpages(subpage.subpages, subpage.path)}
            </li>
          ))}
        </ul>
      );
    };

    const renderPages = (pages: Page[], parentPath = '') => (
      <> 
        {pages.map((page) => (
          <ul key={page.path}  onClick={(e) => { handleLinkClick(e, page.path); }}>
                <Image
                  alt="fsfdsf"
                  src="/images/arrow.png"
                  width={8}
                  height={16}
                  style={{
                    objectFit: 'cover',
                    cursor:'pointer',
                    marginTop:'5px',
                    transform: `rotate(${rotationAngles[page.path] || 0}deg)`,
                    transition: 'transform 0.3s ease',
                  }}
                 
                />   
          <li  >
            <a href="#" className={cx('parentPage')}>
              {page.title}
            </a>
            {expandedPages.includes(page.path) &&
              renderSubpages(page.subpages, page.path)}
          </li>
           </ul>
        ))}
     </>
   
    );

    return (
      <div className={cx('navbar', { hidden: !isVisible })} ref={navbarRef}>
        <div className={cx('closeButton')} onClick={onToggleVisibility}>
        <svg
					width="100"
					height="100"
					viewBox="0 0 148 148"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_172_381)">
						<g filter="url(#filter1_d_172_381)">
							<path
								d="M59 59L89 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
						<g filter="url(#filter2_d_172_381)">
							<path
								d="M89 59L59 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
					</g>
				</svg>
        </div>
        <nav className={cx('pages')}>{renderPages(pages)}</nav>
      </div>
    );
  };

  export default Navbar;
