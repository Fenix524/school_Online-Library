import { User } from '../models/userModel.js'

async function createUser(user) {
	const newUser = await User.create(user)
	return newUser
}

async function getAllUsers() {
	const usersList = await User.find()
	return usersList
}

async function getUserById(userId) {
	const user = await User.findById(userId)
	return user
}

async function updateUserById(userId, updatedUser) {
	const updated = await User.findByIdAndUpdate(userId, updatedUser, {
		new: true,
	})
	return updated
}

async function deleteUserById(userId) {
	const deleted = await User.findByIdAndDelete(userId)
	return deleted
}

async function userIsExist(userId) {
	const existingUser = User.exists({ _id: userId })
	return existingUser
}

export const userService = {
	createUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	userIsExist,
}
