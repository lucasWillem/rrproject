import React, { FC, CSSProperties, useMemo, useCallback, memo } from 'react';
import {
  CardContent,
  CardProps,
  Typography,
  TypographyVariant,
} from '@mui/material';
import { StyledCountryCard } from './styles';
import { BasicCountry } from '../../../hooks/useFetchAllCountries';
import { SpecificCountry } from '../../../hooks/useFetchCountryByName';
import {
  FaUserFriends,
  FaComment,
  FaBuilding,
  FaDollarSign,
  FaGlobe,
} from 'react-icons/fa';
import CountryDatumItem from '../CountryDatumItem';

interface CountryCardProps extends CardProps {
  country: BasicCountry | SpecificCountry;
  containerStyle?: CSSProperties;
  cardVariant: CardVariant;
}

export enum CardVariant {
  Detailed = 'detailed',
  Basic = 'basic',
}

enum TypographyVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
  body1 = 'body1',
  body2 = 'body2',
  caption = 'caption',
  button = 'button',
  overline = 'overline',
  inherit = 'inherit',
}

const CountryCard: FC<CountryCardProps> = (props) => {
  const { country, containerStyle, cardVariant, ...restProps } = props;
  const { name, cca2 } = country;
  // memoized icons - prevent unnecessary re-renders
  const regionIcon = useMemo(() => <FaGlobe size={15} />, [country]);
  const languagesIcon = useMemo(() => <FaComment size={15} />, [country]);
  const capitalIcon = useMemo(() => <FaBuilding size={15} />, [country]);
  const currenciesIcon = useMemo(() => <FaDollarSign size={15} />, [country]);
  const populationIcon = useMemo(() => <FaUserFriends size={18} />, [country]);

  const renderBasicItems = useCallback(
    (
      item: any,
      i: number,
      arr: any[],
      typographyVariant: TypographyVariant,
    ) => (
      <Typography variant={typographyVariant} key={`${item}-${i}`}>
        {item + (i < arr.length - 1 ? ',' : '')}
      </Typography>
    ),
    [country],
  );

  const renderCurrencies = useCallback(
    (
      item: any,
      i: number,
      arr: any[],
      typographyVariant: TypographyVariant,
    ) => {
      const [currencyCode, currencyInfo] = item;

      if (currencyInfo && currencyInfo.name) {
        return (
          <Typography variant={typographyVariant} key={currencyCode}>
            {currencyInfo.name + (i < arr.length - 1 ? ',' : '')}
          </Typography>
        );
      }
      return <></>;
    },
    [],
  );

  return (
    <StyledCountryCard
      cardVariant={cardVariant}
      style={containerStyle}
      raised
      {...restProps}
    >
      <CardContent>
        <Typography
          data-testid="country-name"
          style={{ margin: 5 }}
          variant="subtitle1"
        >{`${name?.common} (${cca2}):`}</Typography>

        {cardVariant === CardVariant.Detailed && (
          <>
            <CountryDatumItem
              icon={capitalIcon}
              items={[(country as SpecificCountry).capital]}
              renderItem={renderBasicItems}
              typographyVariant={TypographyVariants.caption}
            />
            <CountryDatumItem
              icon={regionIcon}
              items={[(country as SpecificCountry).region]}
              renderItem={renderBasicItems}
              typographyVariant={TypographyVariants.caption}
            />
            <CountryDatumItem
              icon={languagesIcon}
              items={Object.values((country as SpecificCountry)['languages'])}
              renderItem={renderBasicItems}
              typographyVariant={TypographyVariants.caption}
            />
            <CountryDatumItem
              icon={currenciesIcon}
              items={Object.entries((country as SpecificCountry).currencies)}
              renderItem={renderCurrencies}
              typographyVariant={TypographyVariants.caption}
            />
            <CountryDatumItem
              icon={populationIcon}
              items={[(country as SpecificCountry).population]}
              renderItem={renderBasicItems}
              typographyVariant={TypographyVariants.caption}
            />
          </>
        )}
      </CardContent>
    </StyledCountryCard>
  );
};

export default memo(CountryCard);
