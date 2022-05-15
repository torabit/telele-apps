import { ReactElement, ReactNode, useState } from 'react';
import { ButtonTag } from '../../../components/General/ButtonTag';

type UseToggleTagsResult = readonly [() => number[], () => ReactNode];

// tag の スキーマが定義されたらそっちつかう
export interface Tag {
  title: string;
  id: number;
}

export const useToggleTags = (tags: readonly Tag[]): UseToggleTagsResult => {
  const [checkList, setCheckList] = useState<boolean[]>(() => tags.map(() => false));

  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };

  const selectedTags = () => {
    const tagIDs: number[] = [];
    checkList.forEach((check, i) => {
      if (check) tagIDs.push(tags[i].id);
    });
    return tagIDs;
  };

  const renderTags = (): ReactElement => {
    return (
      <>
        {tags.map((tag, i) => (
          <ButtonTag
            key={tag.id}
            label={tag.title}
            onPress={() => handleCheckClick(i)}
            isSelected={checkList[i]}
            margin='5px'
          />
        ))}
      </>
    );
  };
  return [selectedTags, renderTags] as const;
};
