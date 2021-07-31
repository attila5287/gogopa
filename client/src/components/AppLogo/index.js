import React from 'react';
import { Animated } from 'react-animated-css';

export default function AppLogo() {
  return (
		<span className='mx-1 text-md'>
			<Animated
				animationIn='slideInLeft'
				isVisible={true}
				className='fab fa-gofore text-light'
			></Animated>
			<Animated
				className='mx-1 fas fa-chart-pie text-light'
				animationIn='rotateIn'
				animationInDelay={2000}
				isVisible={true}
			></Animated>
			<Animated
				className='fab fa-gofore text-light'
				animationIn='slideInRight'
				isVisible={true}
			></Animated>

			<Animated
				className='mx-1 fas fa-donate text-light'
				animationInDelay={1000}
				animationIn='flipInY'
				isVisible={true}
			></Animated>
		</span>
	);
}
