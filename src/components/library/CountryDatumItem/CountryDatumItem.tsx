import React, { FC, ReactNode, memo } from 'react';
import { StyledCountryDatumItem } from './styles';
import { TypographyVariant } from '@mui/material';

interface CountryDatumItemProps {
  icon: ReactNode;
  items: any[];
  renderItem: (
    item: any,
    i: number,
    arr: any[],
    typographyVariant: TypographyVariant,
  ) => JSX.Element;
  typographyVariant: TypographyVariant;
}

const CountryDatumItem: FC<CountryDatumItemProps> = ({
  icon,
  items,
  renderItem,
  typographyVariant,
}) => {
  return (
    <StyledCountryDatumItem>
      {icon}
      {items.map((item, i, arr) => renderItem(item, i, arr, typographyVariant))}
    </StyledCountryDatumItem>
  );
};

export default memo(CountryDatumItem);
