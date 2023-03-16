/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useContext } from 'react';
import { jsx } from '@emotion/react';
import { CurationData } from '#app/models/types/promoData';
import Curation from '#app/components/Curation';
import { ServiceContext } from '../../contexts/ServiceContext';

interface HomePageProps {
  pageData: {
    id: string;
    title: string;
    curations: CurationData[];
  };
}

const HomePage = ({ pageData }: HomePageProps) => {
  const { curations } = pageData;
  const { translations } = useContext(ServiceContext);
  const { topStoriesTitle } = translations;

  return (
    <>
      {curations.map(
        ({
          visualProminence,
          summaries,
          curationId,
          title: curationTitle,
          link,
          position,
          visualStyle,
        }) => {
          return (
            <React.Fragment key={`${curationId}-${position}`}>
              <Curation
                // headingLevel={curationTitle && 3}
                visualStyle={visualStyle}
                visualProminence={visualProminence}
                promos={summaries}
                title={curationTitle}
                topStoriesTitle={topStoriesTitle}
                position={position}
                link={link}
                curationLength={curations && curations.length}
              />
            </React.Fragment>
          );
        },
      )}
      )
    </>
  );
};

export default HomePage;
