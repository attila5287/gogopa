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
      <div className="row">
			{accounts().map((a) => (
				<div className="col-6">
					<h4 className='far fa-minus-square mt-3 mb-2 text-uppercase'> {a.category}</h4>
					<ul className='list-group bg-transparent border-0 shadow-none'>
						{a.accounts.map((f) => (
							<li className='list-group-item py-0 my-1 border-0'>
								<h5 className='w-100'>
									{' '}
									<i className='far fa-plus-square mx-1'></i>
									{f}
								</h5>

							</li>
						))}
					</ul>
				</div>
			))}
      </div>
		</>
	);
};
