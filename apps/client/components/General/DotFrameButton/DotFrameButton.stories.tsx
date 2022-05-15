import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DotFrameButton } from './DotFrameButton';
import AddSVG from '../../../assets/images/add.svg';

export default {
  title: 'General/DotFrameButton',
  component: DotFrameButton,
} as ComponentMeta<typeof DotFrameButton>;

const Template: ComponentStory<typeof DotFrameButton> = (args) => {
  return (
    <>
      <div className='container'>
        <DotFrameButton {...args} />
      </div>
      <style jsx>{`
        .container {
          height: 10rem;
          width: 50rem;
        }
      `}</style>
    </>
  );
};

export const AddSlotButton = Template.bind({});

AddSlotButton.args = {
  label: 'スロットを追加',
  ariaLabel: 'スロットを追加',
  svg: AddSVG,
  onPress: () => alert('a button pressed!'),
};
