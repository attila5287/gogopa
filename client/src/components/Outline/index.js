import React from 'react';
import accounts from '../ProfitLoss/accounts';

export default function Outline(){
	return (
		<>
			<p>
				<b>
					<i className='fas fa-list-ul mx-1'></i>
					View, Edit or Delete Items
				</b>
			</p>
			{accounts().map((a) => (
				<>
					<h4 className='far fa-minus-square mt-3 mb-0'> {a.category}</h4>
					<ul className='list-group bg-transparent border-0 mx-5 px-5'>
						{a.accounts.map((f) => (
							<li className='list-group-item d-flex flex-row justify-content-between align-items-center py-0 my-1 border-0'>
								<h6 className='w-100'>
									{' '}
									<i className='far fa-plus-square mx-2'></i>
									{f}
								</h6>

								<div className='input-group'>
									<div className='input-group-prepend'>
										<span className='input-group-text'>$</span>
									</div>
									<input
										type='text'
										className='form-control form-control-dark border-0 py-0'
										aria-label='Amount (to the nearest dollar)'
									></input>
									<div className='input-group-append'>
										<span className='input-group-text'>.00</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</>
			))}
		</>
	);
};
