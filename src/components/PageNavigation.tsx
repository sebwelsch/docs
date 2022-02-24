import React, {useEffect, useState} from 'react';
import { useCallback } from 'react';

export interface PageNavigationItem {
  level: number,
  text: string,
  link: string,
  onClick?: () => void
}
interface Props {
  items: PageNavigationItem[],
  title?: string
}
export default function PageNavigation(props: Props) {
  const {items} = props;
  const [active, setActive] = useState<PageNavigationItem | null>(null);

  const handleClick = (event: React.MouseEvent, item: PageNavigationItem) => {
    if (item.onClick) {
      event.preventDefault();
      item.onClick();
    }
  }

  const determineActive = useCallback(() => {
    const halfway = window.innerHeight / 2;
    let active : [PageNavigationItem, number] | null = null;

    items.forEach(item => {
      if (item.link?.startsWith('#')) {
        const element = document.querySelector(item.link)!;
        if (!element) return;

        const value = Math.abs(halfway - element.getBoundingClientRect().y);
        if (!active) {
          active = [item, value];
          return;
        }
        
        if (value < active[1]) {
          active = [item, value];
        }
      }
    });
    
    setActive(active ? active[0] : null);
  }, [items]);

  useEffect(() => {
    if (!items.length) return;

    
    const scrollListener = () => {
      determineActive();
    };
    determineActive();
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-768px))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
      <h5 className="text-blue font-semibold mb-4 text-m leading-6">{props.title || 'On this page'} </h5>
      <ul className="text-gray-700 text-sm leading-6">
        {items.map(item => (
          <li key={item.text} className={item.level > 1 ? `ml-4` : ''}>
            <a
              href={item.link}
              className={`group flex items-start block py-1 hover:text-blue ${active === item ? 'text-blue font-semibold' : ''}`}
              onClick={(event) => handleClick(event, item)}
            >
              {item.level > 1 && (
                <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500">
                  <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
              )}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}