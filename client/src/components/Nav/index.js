import React from "react";
import AppLogo from "../AppLogo";
import { useStoreContext } from "../../utils/GlobalState";
import { Animated } from 'react-animated-css';

function Nav() {
  const [store] = useStoreContext();

  return (
		<nav className='navbar navbar-expand navbar-light bg-secondary shadow py-1'>
			<a
				className='navbar-brand py-0 px-1'
				href='https://gogopa.herokuapp.com/'
			>
				<AppLogo />
			</a>
			<a
				className='nav-item nav-link'
				href='/home'
				data-toggle='tooltip'
				title='Home page'
			>
				<i className='far fa-chart-bar mx-1'></i>
				<span className='text-sm'></span>
			</a>
			<a
				className='nav-item nav-link'
				href='/contact'
				data-toggle='tooltip'
				title='Report an issue, await response'
			>
				<i className='far fa-envelope mx-1'></i>
				<span className='text-sm'></span>
			</a>
			{store.loading ? (
				<a className='text-info navbar-brand text-sm'>
					<i className='text-sm fas fa-cog fa-pulse'></i>
					<i className='text-md fas fa-cog fa-spin'></i>
					<em className='text-sm'>Loading...</em>
				</a>
			) : (
				<></>
			)}
		</nav>
	);
}

export default Nav;
