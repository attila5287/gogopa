import React from "react";
import AppLogo from "../AppLogo";
import { useStoreContext } from "../../utils/GlobalState";
import { Animated } from 'react-animated-css';

  function Nav() {
  const [store] = useStoreContext();

  return (
		<>
			<nav className='navbar navbar-expand navbar-dark bg-darko pb-0'>
				<a
					className='navbar-brand py-0 px-1 w-100 ml-auto'
					href='https://gogopa.herokuapp.com/'
				>
					<AppLogo />
				</a>

				{store.loading ? (
					<a className='text-nowrap nav-link disabled'>
						<span className='text-sm'>
							<i className='text-lg fas fa-spinner fa-pulse mx-1'></i>
							<i className=''>Loading...</i>
						</span>
					</a>
				) : (
					<a
						className='nav-link disabled'
						data-toggle='tooltip'
						title='loading success'
					>
						<span className='text-lg text-secondary'>
							<i className='far fa-check-circle mx-1'></i>
						</span>
					</a>
				)}
				<a
					className='nav-link'
					href='/home'
					data-toggle='tooltip'
					title='Home page'
				>
					<i className='far fa-list-alt mx-1'></i>
					<span className='text-sm'></span>
				</a>
				<a
					className='nav-link'
					href='/contact'
					data-toggle='tooltip'
					title='Report an issue, await response'
				>
					<i className='far fa-envelope mx-1'></i>
				</a>
				<a
					className='nav-link text-light'
					href='/contact'
					data-toggle='tooltip'
					title='Report an issue, await response'
				>
					<span className='text-md align-top'>
						<u>
							<small>About</small>
						</u>
					</span>
				</a>
			</nav>

			<nav className='navbar navbar-expand navbar-dark bg-primary pt-0 pb-2 mt-0'></nav>
		</>
	);
}

export default Nav;
