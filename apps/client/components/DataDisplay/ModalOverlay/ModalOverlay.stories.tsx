import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalOverlay } from './ModalOverlay';
import { useButtonReaction } from '../../../hooks';

export default {
  title: 'DataDisplay/ModalOverlay',
  component: ModalOverlay,
} as ComponentMeta<typeof ModalOverlay>;

const Template: ComponentStory<typeof ModalOverlay> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  const preventFocusOnPress = true;
  const onPress = () => setModalOpen(true);
  const { buttonProps } = useButtonReaction({ onPress, preventFocusOnPress }, ref);

  return (
    <>
      <div>
        <button {...buttonProps} ref={ref}>
          show modal
        </button>
        {modalOpen ? (
          <ModalOverlay setModalOpen={setModalOpen}>
            <div className='modal-content'>
              <button>Click Me!</button>
              <p>この要素はクリックしてもダイジョブだよ!</p>
            </div>
          </ModalOverlay>
        ) : null}
      </div>
      <style jsx>{`
        .modal-content {
          width: 500px;
          height: 500px;
          background-color: white;
        }
      `}</style>
    </>
  );
};

export const ButtonOverlay = Template.bind({});

ButtonOverlay.args = {};
