// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import chartLineLight from '@fortawesome/fontawesome-pro-light/faChartLine';
import chartLineRegular from '@fortawesome/fontawesome-pro-regular/faChartLine';
import chartLineSolid from '@fortawesome/fontawesome-pro-solid/faChartLine';

library.add(chartLineLight, chartLineRegular, chartLineSolid);

const _ChartLine: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('chart-line', props.variant)}
  />
);

export const ChartLine = createIconVariants(_ChartLine);
