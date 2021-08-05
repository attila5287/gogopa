import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_FINANCIAL, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function CreateFinancial() {
  const titleRef = useRef();
  const companyRef = useRef();
  const descRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveFinancial({
			title: titleRef.current.value,
			company: companyRef.current.value,
			description: descRef.current.value
		})
			.then((result) => {
				dispatch({
					type: ADD_FINANCIAL,
					financial: result.data
				});
			})
			.catch((err) => console.log(err));

    titleRef.current.value = '';
    descRef.current.value = '';
    companyRef.current.value = '';
  };

  return (
		<div className='row col-8 offset-2'>
			<h3 className='mt-5 mb-0'>
				<i className='fas fa-plus mx-2'></i>
				Create new financial
			</h3>
			<hr className='mb-0' />
			<form className='form-group mt-0 mb-5' onSubmit={handleSubmit}>
				<label htmlFor='title'>
					<i className='fas fa-plus mx-2'></i>
					Title:
				</label>
				<input
					className='form-control mb-5'
					required
					ref={titleRef}
					id='title'
					placeholder='Title'
				/>
				<label htmlFor='body'>
					<i className='fas fa-plus mx-2'></i>
					Description:
				</label>
				<textarea
					className='form-control mb-5'
					required
					ref={descRef}
					id='description'
					placeholder='desc'
				/>
				<label htmlFor='screen name'>
					<i className='fas fa-plus mx-2'></i>
					Company Name:
				</label>
				<input
					className='form-control mb-5'
					ref={companyRef}
					id='company'
					placeholder='company'
				/>
				<button
					className='btn btn-lg btn-success mt-3 mb-5 w-100'
					disabled={state.loading}
					type='submit'
				>
					<i className='far fa-save mx-2'> Save</i>
				</button>
			</form>
		</div>
	);
}

export default CreateFinancial;
