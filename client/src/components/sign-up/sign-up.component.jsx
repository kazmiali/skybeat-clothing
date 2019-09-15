import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			setCredentials({
				...userCredentials,
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
			return;
		}
		signUpStart(email, password, displayName);

		setCredentials({
			...userCredentials,
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	const handleChange = event => {
		setCredentials({
			...userCredentials,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sign up with email and password</span>
			<form action='' className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={handleChange}
					label={'Display Name'}
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label={'E-Mail'}
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label={'Password'}
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label={'Confirm Password'}
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>{'Sign Up'.toUpperCase()}</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: (email, password, displayName) =>
		dispatch(signUpStart({ email, password, displayName }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
