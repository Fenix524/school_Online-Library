import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/types'
import { role } from '../../util/enums'

type AuthState = {
	user: User
	isLoggedIn: boolean
	token?: string
}

const initialState: AuthState = {
	user: {
		firstName: 'Олександра',
		lastName: 'Бурімова',
		email: 'OleksandraBurimova@gmail.com',
		img: 'https://rus-pic.ru/wp-content/uploads/2021/07/krasivye-devushki-blondinki-na-avu-31-foto-c2d37a7.jpg',
		class: {
			number: 11,
			letter: 'A',
			startYear: new Date(Date.UTC(2024, 0, 1)).getFullYear(),
			toString: function () {
				return this.number + ' - ' + this.letter
			},
		},
		role: role.Admin,
	},
	isLoggedIn: false,
	token: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsLoggedIn(state, action: PayloadAction<boolean>) {
			state.isLoggedIn = action.payload
		},
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload
		},
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload
		},
	},
})

export const { setIsLoggedIn, setUser, setToken } = authSlice.actions
export const authReducer = authSlice.reducer
