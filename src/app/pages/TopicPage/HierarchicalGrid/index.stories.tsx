import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';
import { ServiceContextProvider } from '../../../contexts/ServiceContext';
import { withServicesKnob } from '../../../legacy/psammead/psammead-storybook-helpers/src';
import ThemeProvider from '../../../components/ThemeProvider';
import { Services, Variants } from '../../../models/types/global';
import HiearchicalGrid from './index';
import pidginSummaries from './fixtures';

interface Props {
  service: Services;
  variant: Variants;
}

const Component = ({ service, variant }: Props) => {
  return (
    <ThemeProvider service={service} variant={variant}>
      <ServiceContextProvider service={service} variant={variant}>
        <HiearchicalGrid
          promos={pidginSummaries.slice(
            0,
            number('Promo Count', 12, { min: 3, max: 12 }),
          )}
        />
      </ServiceContextProvider>
    </ThemeProvider>
  );
};

export default {
  title: 'Topic/HierarchicalGrid',
  Component,
  decorators: [withKnobs, withServicesKnob()],
};

export const Example = Component;
