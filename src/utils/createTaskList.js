import {getModifiedDate} from '.';
import {priorityLevels} from '../constants';

export const createTaskList = () => {
  const currentDate1 = new Date();

  const currentDate130 = new Date(currentDate1);
  currentDate130.setSeconds(currentDate130.getSeconds() - 30);

  const currentDate160 = new Date(currentDate1);
  currentDate160.setSeconds(currentDate160.getSeconds() - 60);

  const currentDate2 = new Date();
  currentDate2.setDate(currentDate2.getDate() - 1);

  const currentDate230 = new Date(currentDate2);
  currentDate230.setSeconds(currentDate230.getSeconds() - 30);

  const currentDate260 = new Date(currentDate2);
  currentDate260.setSeconds(currentDate260.getSeconds() - 60);

  const currentDate3 = new Date();
  currentDate3.setDate(currentDate3.getDate() - 2);

  const currentDate330 = new Date(currentDate3);
  currentDate330.setSeconds(currentDate330.getSeconds() - 30);

  const currentDate360 = new Date(currentDate3);
  currentDate360.setSeconds(currentDate360.getSeconds() - 60);

  return [
    {
      modifiedDate: getModifiedDate(currentDate1),
      taskList: [
        {
          date: currentDate1.toISOString(),
          title: 'Complete project proposal',
          priority: priorityLevels.high,
          completed: false,
        },
        {
          date: currentDate130.toISOString(),
          title: 'Prepare presentation for meeting',
          priority: priorityLevels.low,
          completed: false,
        },
        {
          date: currentDate160.toISOString(),
          title: 'Review and finalize budget',
          priority: priorityLevels.medium,
          completed: false,
        },
      ],
    },
    {
      modifiedDate: getModifiedDate(currentDate2),
      taskList: [
        {
          date: currentDate2.toISOString(),
          title: 'Conduct market research',
          priority: priorityLevels.medium,
          completed: false,
        },
        {
          date: currentDate230.toISOString(),
          title: 'Update project timeline',
          priority: priorityLevels.high,
          completed: false,
        },
        {
          date: currentDate260.toISOString(),
          title: 'Meet with stakeholders',
          priority: priorityLevels.low,
          completed: false,
        },
      ],
    },
    {
      modifiedDate: getModifiedDate(currentDate3),
      taskList: [
        {
          date: currentDate3.toISOString(),
          title: 'Analyze data',
          priority: priorityLevels.low,
          completed: false,
        },
        {
          date: currentDate330.toISOString(),
          title: 'Develop project plan',
          priority: priorityLevels.medium,
          completed: false,
        },
        {
          date: currentDate360.toISOString(),
          title: 'Create project milestones',
          priority: priorityLevels.high,
          completed: false,
        },
      ],
    },
  ];
};
