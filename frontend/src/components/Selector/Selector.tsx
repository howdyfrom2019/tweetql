import React, { useCallback, useEffect, useState } from 'react';

interface CategoryProps {
  id: number;
  content: string;
  customData?: any;
}

interface SelectorProps {
  categories: CategoryProps[];
  initId?: number;
  placeholder?: string;
}

const SELECTOR_ITEM_STYLE = 'px-4 py-2 w-40 text-lolYellow border border-lolYellow';

const Selector: React.FC<SelectorProps> = ({ categories, initId, placeholder }) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: -1, content: '', });
  const [openList, setOpenList] = useState(false);

  const init = useCallback((id: number) => {
    if (placeholder) {
      setSelectedCategory({ id: -1, content: placeholder });
    }
    if (categories && categories.length > id) {
      setSelectedCategory(categories[id]);
    }
  }, [placeholder, categories]);

  const onHandlerToggleSelector = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenList((prev) => !prev);
    //TODO: execute function which figure it out what index user selecting.
  }, []);

  useEffect(() => {
    init(initId || 0);
  }, [initId]);

  return (
    <>
      <button
        className={`${SELECTOR_ITEM_STYLE} selector-button ${openList ? 'after:animate-open-close' : ''}`}
        onClick={onHandlerToggleSelector}
      >
        {selectedCategory.content}
      </button>
      <div className={`${openList ? 'flex' : 'hidden'} flex-col`}>
        {categories.map((category) => (
          <span key={`selector_${category.id}`} className={`${SELECTOR_ITEM_STYLE} mt-[-1px]`}>{category.content}</span>
        ))}
      </div>
    </>
  )
}

export default Selector;