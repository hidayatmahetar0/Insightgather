import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {searchUsers} from '../../context/github/GithubActions'
import { ACTIONS } from '../../context/github/GithubReducer';

function UserSearch() {
	const [text, setText] = useState('');
	const { users, dispatch } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	const  handleSubmit = async (e) => {
		e.preventDefault();

		if (text === '') {
			setAlert('Please enter something', 'error');
		} else {
			dispatch({type: ACTIONS.SET_LOADING});
			const users = await searchUsers(text);
			dispatch({type: ACTIONS.GET_USERS, payload: users});
			setText('');
		}
	}

	return (
		<div className='grid justify-items-center'>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full pr-40 bg-gray-200 input input-lg text-black border-6 border-black'
								placeholder='Search...'
								value={text}
								onChange={(e) => {
									setText(e.target.value)
								}}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-30 btn btn-lg'
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button
						className='btn btn-ghost btn-large'
						onClick={() => {
							dispatch({type: ACTIONS.CLEAR_USERS})
						}}
					>
						Clear
					</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch;