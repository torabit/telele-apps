import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { Switch } from './Switch';

export default {
  title: 'General/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <RecoilRoot>
      <div className='container'>
        <Switch isSelected={toggled} setSelected={setToggled} ariaLabel='storybookのテストボタン' />
      </div>
      <style jsx>{`
        .container {
        }
      `}</style>
    </RecoilRoot>
  );
};

export const Normal = Template.bind({});
