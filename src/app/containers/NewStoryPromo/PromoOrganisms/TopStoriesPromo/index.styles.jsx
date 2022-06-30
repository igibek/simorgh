import { getPica } from '#legacy/gel-foundations/src/typography';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '#app/legacy/gel-foundations/src/spacings';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '#app/legacy/gel-foundations/src/breakpoints';
import styled from '@emotion/styled';
import Promo from '../../Promo';

export const StyledPromoHeading = styled(Promo.Heading)`
  display: inline-block;
  ${({ script }) => script && getPica(script)}
`;

export const StyledPromo = styled(Promo)`
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

export const StoryPromoList = styled(Promo.UnorderedList)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    display: flex;
    gap: ${GEL_SPACING};
  }
`;

export const FlexListItem = styled(Promo.ListItem)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    flex-grow: 1;
    flex-basis: 0;
    margin: 0;
  }
`;

export default StyledPromoHeading;
