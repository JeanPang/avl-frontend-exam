import React from 'react';
import PropTypes from 'prop-types';
import './circle.css';

const PercentageCircle = ({
	percentage,
	width,
	strokeWidth,
	fontSize,
	fontColor,
	fontFamily,
	primaryColor,
	secondaryColor,
	fill,
	hidePercentageText
}) => {
	const PI = 3.14;

	const R = (width / 2) - (strokeWidth * 2);
	let circumference = 2 * PI * R;
	let offset = circumference - percentage / 100 * circumference;
	let gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, '');
	return (
		<div
			className="reactGradientProgress"
			style={{
				height: `${width}px`,
				width: `${width}px`,
			}}
		>
			{!hidePercentageText ?
				<div id="reactGradientProgressPercentage">
					<div
						className="reactGradientProgressPercentageSpan"
						style={{
							fontSize,
							fontFamily,
							color: fontColor,
						}}
					>
						<div className="reactGradientProgressPercentageTitle">ACCURACY</div>
						<span>
							<span className="reactGradientProgressPercentageNo">{percentage}</span>
							<span className="reactGradientProgressPercentageMark">&nbsp;%</span>
						</span>
					</div>
				</div>
				: null
			}

			<svg
				width='100%'
				height='100%'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				className="reactGradientProgressShadow"
			>
				<linearGradient
					id={gradientId}
					x1='0%'
					y1='0%'
					x2='100%'
					y2='100%'
				>
					<stop offset='0%' stopColor={primaryColor[0]} />
					<stop offset='100%' stopColor={primaryColor[1]} />
				</linearGradient>
				<circle
					strokeWidth={strokeWidth}
					fill='transparent'
					r={R}
					cx={width / 2}
					cy={width / 2}
					stroke={secondaryColor}
					strokeDasharray={`${circumference} ${circumference}`}
				/>
				<circle
					className="progressCircleBar"
					strokeWidth={strokeWidth}
					fill={fill}
					r={R}
					cx={width / 2}
					cy={width / 2}
					stroke={`url(#${gradientId})`}
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={offset}
					strokeLinecap="butt"
				/>
			</svg>
		</div>
	);
};

PercentageCircle.propTypes = {
	percentage: PropTypes.number.isRequired,
	width: PropTypes.number,
	strokeWidth: PropTypes.number,
	fontSize: PropTypes.string,
	fontColor: PropTypes.string,
	fontFamily: PropTypes.string,
	primaryColor: PropTypes.array,
	secondaryColor: PropTypes.string,
	fill: PropTypes.string,
	hidePercentageText: PropTypes.bool
};

PercentageCircle.defaultProps = {
	width: 200,
	strokeWidth: 5,
	fontSize: 'inherit',
	fontColor: 'inherit',
	fontFamily: 'inherit',
	primaryColor: ['#00BBFF', '#92d7f1'],
	secondaryColor: 'rgba(256,256,256,0.1)',
	fill: 'transparent'
};

export default PercentageCircle;
