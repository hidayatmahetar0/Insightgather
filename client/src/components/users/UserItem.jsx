import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {
	return (
		<div className='card shadow-slate-900/60 compact shadow-[-1px_6px_17px_2px] text-white side bg-green-800'>
			<div className='flex-row items-center space-x-4 card-body'>
				<div>
					<div className='avatar '>
						<div className='rounded-full shadow w-14 h-14'>
							<img src={avatar_url} alt={login + ' profile'} />
						</div>
					</div>
				</div>

				<div>
					<h2 className='card-title'>{login}</h2>
                    <Link to={`/user/${login}`} className='text-black'>Visit Profile</Link>
				</div>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
}

export default UserItem
