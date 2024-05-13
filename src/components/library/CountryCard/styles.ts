import { Card, styled } from '@mui/material';
import { CardVariant } from './CountryCard';

interface StyledCardProps {
  cardVariant: string;
}

const StyledCountryCard = styled(Card)<StyledCardProps>(
  ({ theme, cardVariant }) => ({
    margin: theme.spacing(3),
    cursor: cardVariant === CardVariant.Basic ? 'pointer' : 'auto',
  }),
);

export { StyledCountryCard };
