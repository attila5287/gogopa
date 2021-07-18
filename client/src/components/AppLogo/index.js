import React from 'react';
import { Animated } from 'react-animated-css';

export default function AppLogo() {
  return (
		<span className='text-xl'>
			<Animated
				animationIn='slideInUp'
				isVisible={true}
				className='fab fa-goodreads-g text-primary'
			></Animated>
			<Animated
				className='fas fa-chart-pie text-info'
				animationIn='rotateIn'
				animationInDelay={1000}
				isVisible={true}
			></Animated>
			<Animated
				className='fab fa-goodreads-g text-primary'
				animationIn='slideInDown'
				isVisible={true}
			></Animated>

			<Animated
				className='fas fa-donate text-green'
				animationInDelay={1000}
				animationIn='flipInY'
				isVisible={true}
			></Animated>
		</span>
	);
}
