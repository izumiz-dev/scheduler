import { Event } from 'components/Event';
import styled from 'styled-components';
import './index.css';
import { useState } from 'react';

export interface ICheck {
  title: string;
  checked?: boolean;
}
interface IEvent {
  title: string;
  describe: string;
  startDateTime: string;
  endDateTime: string;
  checkList?: ICheck[];
}

const events: IEvent[] = [
  {
    title: '朝の準備',
    describe: 'asdf',
    startDateTime: '6:00',
    endDateTime: '7:00',
    checkList: [
      {
        title: 'ゴミ出し',
      },
    ],
  },
  {
    title: '通学時間',
    describe: 'asdf',
    startDateTime: '7:00',
    endDateTime: '8:00',
  },
  {
    title: '論文を書く',
    describe: 'asdf',
    startDateTime: '8:00',
    endDateTime: '10:00',
    checkList: [
      {
        title: '実験方法の修正',
      },
      {
        title: '考察の修正',
      },
    ],
  },
  {
    title: 'ゼミ準備',
    describe: 'asdf',
    startDateTime: '11:00',
    endDateTime: '12:00',
    checkList: [
      {
        title: '資料印刷',
      },
    ],
  },
  {
    title: '昼休憩',
    describe: 'asdf',
    startDateTime: '12:00',
    endDateTime: '13:00',
  },
  {
    title: 'ゼミ',
    describe: 'asdf',
    startDateTime: '13:00',
    endDateTime: '16:00',
  },
];

export const App = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <Center>
      <div>
        <h2>Schedule task list</h2>
        {events.map((event: IEvent, key: number) => (
          <Event
            title={event.title}
            startDateTime={event.startDateTime}
            endDateTime={event.endDateTime}
            checkList={event.checkList}
            key={key.toString()}
          />
        ))}
      </div>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
