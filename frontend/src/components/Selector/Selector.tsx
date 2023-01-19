import React, { useCallback, useEffect, useState } from 'react';

interface CategoryProps<T> {
  id: number;
  content: string;
  customData?: T;
}

interface SelectorProps<T> {
  categories: CategoryProps<T>[];
  initId?: number;
  placeholder?: string;
  callback?: (item: CategoryProps<T>) => void;
}

const SELECTOR_ITEM_STYLE = 'px-4 py-2 w-40 text-lolYellow border border-lolYellow bg-section';

const Selector =  <T extends unknown>(props: SelectorProps<T>) => {
  const { categories, initId, placeholder, callback } = props;
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps<T>>({ id: -1, content: '' });
  const [openList, setOpenList] = useState(false);

  const init = useCallback((id: number) => {
    if (placeholder) {
      setSelectedCategory({ id: -1, content: placeholder });
    }
    if (categories && categories.length > id) {
      setSelectedCategory(categories[id]);
    }
  }, [placeholder, categories]);

  const onHandlerToggleSelector = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    setOpenList((prev) => !prev);
  }, []);

  const onChangeSelectedItem = useCallback((e: React.MouseEvent<HTMLSpanElement>, category: CategoryProps<T>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(category);
    callback && callback(category);
    onHandlerToggleSelector();
  }, [callback]);

  useEffect(() => {
    init(initId || 0);
  }, [initId]);

  // useEffect(() => {
  //   callback && callback(selectedCategory);
  // }, [selectedCategory]);

  return (
    <>
      <button
        className={`${SELECTOR_ITEM_STYLE} selector-button h-8 relative ${openList ? 'after:animate-open-close' : ''} font-regular-12`}
        onClick={onHandlerToggleSelector}
      >
        {selectedCategory.content}
        <div className={`${openList ? 'flex' : 'hidden'} flex-col absolute top-0 left-[-1px]`}>
          {categories.map((category) => (
            <span
              key={`selector_${category.id}`}
              className={`${SELECTOR_ITEM_STYLE} mt-[-1px] cursor-pointer font-regular-12`}
              onClick={(e) => {
                onChangeSelectedItem(e, category);
              }}
            >
            {category.content}
          </span>
          ))}
        </div>
      </button>
    </>
  )
}

export default Selector;