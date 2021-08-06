import { Animated } from 'react-animated-css';
import React, { useEffect, useState } from 'react';
import helpers from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { SET_CURRENT_FINANCIAL } from '../../utils/actions';

export default function FinNotes() {
  const [state, dispatch] = useStoreContext();

  return (
		<>
			<div className='table-responsive mx-5 bg-secondary px-2 py-0 rounded-2xl shadow-sm'>
				<table className='table table-sm table-bordered table-striped table-primary table-hover'>
					<thead>
						<tr key='00'>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{[
							'Title: ' + state.currentFinancial.title,
							'Company: ' + state.currentFinancial.company,
							'Created: ' + state.currentFinancial.created
						].map((e, i) => (
							<tr key={i}>
								<td scope='row'>
									<Animated
										animationIn='fadeIn'
										animationInDelay={i * 250 + 500}
									>
										<i className='fas fa-angle-right mx-1'></i>
									</Animated>
								</td>
								<td scope='row'>
									<b>
										<Animated
											animationIn='fadeIn'
											animationInDelay={i * 500 + 750}
										>
											{e.split(': ')[0]}
											{': '}
										</Animated>
									</b>
								</td>
								<td>
									{e.split(': ')[0] === 'Created'
										? helpers.formatDate(e.split(' ')[1])
										: e
												.split(' ')
												.splice(1, e.length - 1)
												.join(' ')}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ul className='list-group text-md mx-5 my-5'>
				{state.currentFinancial?.notes.map((n, i) => (
          <li
							key={i * 1111}
							className='list-group-item d-flex flex-row justify-content-start shadow-none align-items-center pb-0 pt-1'
						>
					<Animated animationIn='shake'>
							<h1 className='far fa-sticky-note my-0'></h1>
					</Animated>
							<b className='mx-2'>
								{n.about}
								{':  '}
							</b>
							<i>{n.text}</i>
						</li>
				))}
			</ul>
		</>
	);
}
