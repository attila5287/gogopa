import { Animated } from 'react-animated-css';

import React from 'react';

const FinInfo = () => {
	return (
		<div>
			<Animated animationIn='slideInLeft'>
				<div className='text-sm  mb-0'>
					<i className='far fa-calendar fa-fw mx-1'></i>
					<b>{'Created At: '}</b>
					{helpers.formatDate(state.currentFinancial.created)}

					{state.currentFinancial.notes.map((n, i) => (
						<>
							<span>
								<i className='far fa-sticky-note fa-fw mx-1'></i>
								<b>
									{n.about}
									{' : '}
								</b>
							</span>
							<i className='mb-0'>{n.text}</i>
						</>
					))}
				</div>
			</Animated>
			<Animated animationInDelay={0} animationIn='zoomIn'>
				<h5 className='text-dark text-center mb-0 mx-5'>
					<b>{state.currentFinancial.title}</b>
				</h5>
				<hr className='bg-primary my-0 mx-5 pt-0 pb-1 rounded-lg' />
				<p className='text-sm text-center mb-1'>
					{state.currentFinancial.company}{' '}
				</p>
			</Animated>
		</div>
	);
};

export default FinInfo;
