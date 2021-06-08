import { ICheck } from 'App';
import styled, { css } from 'styled-components';
import { CheckBox } from 'components/CheckBox';
export const Event = (props: EventProps) => {
  return (
    <Outer range={diffTime(props.startDateTime, props.endDateTime)}>
      <TimeRange
        title={props.title}
        start={props.startDateTime}
        end={props.endDateTime}
      />
      {props.checkList &&
        props.checkList.map((check: any, id: number) => {
          return (
            <CheckBox id={id} checked={check.checked} value={check.title} />
          );
        })}
    </Outer>
  );
};

const diffTime = (start: string, end: string): number => {
  const diff = Math.abs(
    parseInt(start.split(':')[0]) - parseInt(end.split(':')[0]),
  );
  return diff;
};

const TitleTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
`;

const Title = styled.div`
  font-weight: 600;
  margin: 1px;
`;

const Time = styled.div`
  font-weight: 500;
  color: #292929;
  margin: 1px;
`;

interface OuterProps {
  range: number;
}

const Outer = styled.div<OuterProps>`
  border-radius: 4px;
  border: 2px solid blueviolet;
  margin: 2px;
  padding: 2px;
  width: 20rem;
  ${(props) =>
    props.range &&
    css`
      height: ${(props.range - 1) * 3 + 6}rem;
    `}
`;

const TimeRange = ({
  title,
  start,
  end,
}: {
  title: string;
  start: string;
  end: string;
}) => {
  return (
    <TitleTime>
      <Title>{title}</Title>
      <Time>
        {start} - {end}
      </Time>
    </TitleTime>
  );
};

interface EventProps {
  title: string;
  // describe: string;
  startDateTime: string;
  endDateTime: string;
  checkList?: ICheck[];
}
