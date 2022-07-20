import React from 'react';

interface ButtonProps {
	border?: string;
	backgroundColor?: string;
	color?: string;
	borderRadius?: string;
	padding?: string;
	marginRight?: string;
	marginBottom?: string;
	fontSize?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	border = 'none',
	backgroundColor = 'transparent',
	color = 'white',
	children,
	onClick,
	borderRadius = '.5em',
	padding = '.7em',
	marginRight = '0',
	fontSize = '1.2em',
	marginBottom = '1rem',
}) => {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor,
				border,
				borderRadius,
				color,
				padding,
				marginRight,
				fontSize,
				marginBottom,
			}}
			type="button"
		>
			{children}
		</button>
	);
};

export default Button;
