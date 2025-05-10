import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpModalOpen: false,
    signInModalOpen: false,
    commentModalOpen: false,
    commentPostDetails: {
        name: "",
        username: "",
        id: "",
        text: "",
    }
 
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
        state.signUpModalOpen = true
    },
    closeSignUpModal: (state) => {
        state.signUpModalOpen = false
    },
    openSignInModal: (state) => {
        state.signInModalOpen = true
    },
    closeSignInModal: (state) => {
        state.signInModalOpen = false
    },
    openCommentModal: (state) => {
        state.commentModalOpen = true
    },
    closeCommentModal: (state) => {
        state.commentModalOpen = false
    },
    setCommentDetails: (state, action) => {
        state.commentPostDetails.name = action.payload.name
        state.commentPostDetails.username = action.payload.username
        state.commentPostDetails.id = action.payload.id
        state.commentPostDetails.text = action.payload.text
    }
  },
});

export const { 
    openSignUpModal, 
    closeSignUpModal, 
    openSignInModal, 
    closeSignInModal, 
    openCommentModal, 
    closeCommentModal,
    setCommentDetails,
} = modalSlice.actions

export default modalSlice.reducer;