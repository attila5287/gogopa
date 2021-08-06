import { Animated } from 'react-animated-css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';

export default function NavPills(props) {
	const [state, dispatch] = useStoreContext();
	const location = useLocation();

  return (
		<>
			<nav className='nav nav-tabs nav-fill my-1 mx-4 shadow-none'>
				{['Data', 'Report', 'Charts'].map((l, i) => (
					<li className='nav-item text-md'>
						<Animated animationIn='fadeInDown' animationInDelay={i*1000}>
							<i>{l}</i>
						</Animated>
					</li>
				))}
			</nav>
			<nav className='nav nav-tabs nav-fill mt-0 mb-2 pb-0 mx-4 shadow-none'>
				<Link
					to='/home'
					title='(create a new one or select from existing)'
					data-toggle='tooltip'
					className='nav-item nav-link border-0'
				>
					<span className='text-3xl'>
						<i className='fas fa-database mx-1 fa-fw'></i>
					</span>
					<Animated
						animationIn='zoomIn'
						className={
							location.pathname === '/home'
								? 'bg-primary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
								: 'bg-secondary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
						}
					></Animated>
				</Link>
				<Link
					className='nav-item nav-link border-0'
					data-toggle='tooltip'
					title='(generates a
									statement-style financial)'
					to={'/financials/' + state.currentFinancial._id}
				>
					<span className='text-3xl'>
						<i className='fas fa-file-invoice-dollar mx-1 fa-fw'></i>
					</span>
					<Animated
						animationIn='zoomIn'
						className={
							location.pathname === '/financials/' + state.currentFinancial._id
								? 'bg-primary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
								: 'bg-secondary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
						}
					></Animated>
				</Link>
				<Link
					to={'/charts/' + state.currentFinancial._id}
					className='nav-item nav-link border-0'
				>
					<span className='text-4xl'>
						<i className='fas fa-chart-line fa-fw mx-1'></i>
					</span>
					<Animated
						animationIn='zoomIn'
						className={
							location.pathname === '/charts/' + state.currentFinancial._id
								? 'bg-primary mt-2 mb-1 pt-0 pb-1'
								: 'bg-secondary mt-2 mb-1 pt-0 pb-1'
						}
					></Animated>
				</Link>
			</nav>
		</>
	);
}
