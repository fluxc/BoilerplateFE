import React, { type FC } from 'react';
import styled from 'styled-components/native';

// interface Foo {
// 	[key: string]: string;
// }
type PositionType = Record<string, string>;

const positionVariant: PositionType = {
	top: 'margin-top',
	left: 'margin-left',
	right: 'margin-right',
	bottom: 'margin-bottom',
};

const getVariant = (position: string, size: string) => {
	const property: string = positionVariant[position];
	return `${property}: ${size}`;
};

interface SpacerView {
	variant: string;
}

const SpacerViewComp = styled.View<SpacerView>`
	${({ variant }) => variant}
`;

type Props = {
	position: string;
	size: string;
	children?: React.ReactNode;
};

export const Spacer: FC<Props> = ({ position, size, children }) => {
	const variant = getVariant(position, size);
	return <SpacerViewComp variant={variant}>{children}</SpacerViewComp>;
};

Spacer.defaultProps = {
	position: 'top',
	size: 'size4',
};

/* <Spacer position='top' size={theme.sizes.size32} /> */
