import React, { useEffect } from 'react';
import { ListItem, List } from '../List';
import DeleteBtn from '../DeleteBtn';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_FINANCIALS, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function FinancialsList() {
	const [state, dispatch] = useStoreContext();

	const getFinancials = () => {
		dispatch({ type: LOADING });
		API.getFinancials()
			.then((results) => {
				dispatch({
					type: UPDATE_FINANCIALS,
					financials: results.data
				});
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getFinancials();
	}, []);

	return (
		<div>
			<h1>
				<i className='fas fa-file-invoice mx-2'></i>
				Financials
			</h1>
			<h3 className='mb-0 mt-5'>
				<i className='fas fa-list-ul mx-2'></i>
        Click on a financial to view
			</h3>
			<hr />
			{state.financials.length ? (
				<List className='list-group'>
					{state.financials.map((financial) => (
						<ListItem key={financial._id}>
							<Link to={'/financials/' + financial._id}>
								<strong>{financial.title}</strong>
								<i>({financial.company})</i>
							</Link>
						</ListItem>
					))}
				</List>
			) : (
				<h3>You haven't added any financials yet!</h3>
			)}
		</div>
	);
}

export default FinancialsList;
