import styled from 'styled-components/native';
import { Theme } from '@/theme/theme.interface';
const defaultTextStyles = (theme: Theme, color?: string, align: string = '') => `
  font-family: ${theme.fontFamily.interMedium};
  font-weight: ${theme.fontWeights.medium};
  text-align: ${align ? align : null};
  letter-spacing: 0.5px;
  color: ${color ? color : theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const h1 = (theme: Theme) => `
	font-family: ${theme.fontFamily.interBold};
    font-size: ${theme.fontSizes.h1};
	line-height: ${theme.lineHeights.h1};
	font-weight: ${theme.fontWeights.bold};
`;
const h2 = (theme: Theme) => `
	font-family: ${theme.fontFamily.interBold};
    font-size: ${theme.fontSizes.h2};
	line-height: ${theme.lineHeights.h2};
	font-weight: ${theme.fontWeights.bold};
`;
const h3 = (theme: Theme) => `
	font-family: ${theme.fontFamily.interBold};
    font-size: ${theme.fontSizes.h3};
	line-height: ${theme.lineHeights.h3};
	font-weight: ${theme.fontWeights.bold};
`;
const p1 = (theme: Theme) => `
	line-height: ${theme.lineHeights.p1};
	font-size: ${theme.fontSizes.p1};
`;
const p2 = (theme: Theme) => `
	line-height: ${theme.lineHeights.p2};
	font-size: ${theme.fontSizes.p2};

`;
const s = (theme: Theme) => `
    font-size: ${theme.fontSizes.s};
	line-height: ${theme.lineHeights.s};
`;

type VariantFunction = (theme: Theme) => string;

interface Variants {
    [key: string]: VariantFunction;
}

const variants: Variants = {
    h1,
    h2,
    h3,
    p1,
    p2,
    s,
};

interface Props {
    variant?: string;
    align?: string;
    theme: Theme;
    color?: string;
}

export const Text = styled.Text<Props>`
    ${({ theme, color, align }) => defaultTextStyles(theme, color, align)}
    ${(props) => (props.variant ? variants[props.variant](props.theme) : null)}
`;

Text.defaultProps = {
    variant: 'p1',
};

{
    /* <Text variant='h1'>Welcome Back!</Text>

    <Text variant='p2' color={theme.colors.text.secondary}>
                In TypeScript, when you have an object like variants with various functions as properties, and you want
                to allow arbitrary keys to access these functions, you can use the any type for the object.
     </Text> */
}
