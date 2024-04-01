import { RootState } from '../store'

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectToken = (state: RootState) => state.auth.token
export const selectUser = (state: RootState) => state.auth.user
export const selectUserRole = (state: RootState) => state.auth.user.role
