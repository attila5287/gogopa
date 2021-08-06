import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';


export default function NavPills(props) {
	const [state, dispatch] = useStoreContext();
  const location = useLocation();
  

  return (
		<nav className='nav nav-tabs nav-fill text-sm my-5 p-1'>
			<Link
				to='/home'
				title='(create a new one or select from existing)'
				data-toggle='tooltip'
				className='nav-item nav-link px-2 py-1 border-0'
			>
				<i className='fas fa-file-invoice mx-1 fa-fw'></i>
				Financials
				<div
					className={
						location.pathname === '/home' 
							? 'bg-primary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
							: 'bg-secondary my-0 pt-0 pb-1 rounded-2xl'
					}
				></div>
			</Link>
			<Link
				className='nav-item nav-link px-2 py-1 border-0'
				data-toggle='tooltip'
				title='(generates a
									statement-style financial)'
				to={'/financials/' + state.currentFinancial._id}
			>
				<i className='fas fa-file-invoice-dollar mx-1 fa-fw'></i>
				Reports
				<div
					className={
						location.pathname === '/financials/' + state.currentFinancial._id
							? 'bg-primary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
							: 'bg-secondary my-0 pt-0 pb-1 rounded-2xl'
					}
				></div>
			</Link>
			<Link
				to={'/charts/' + state.currentFinancial._id}
				className='nav-item nav-link px-2 py-1 border-0'
			>
				<i className='fas fa-chart-line mx-1'></i>
				Charts
				<div
					className={
						location.pathname === '/charts/' + state.currentFinancial._id
							? 'bg-primary mt-2 mb-0 pt-0 pb-1 rounded-2xl'
							: 'bg-secondary my-0 pt-0 pb-1 rounded-2xl'
					}
				></div>
			</Link>
		</nav>
	);
}
