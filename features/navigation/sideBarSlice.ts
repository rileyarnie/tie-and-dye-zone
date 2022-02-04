import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface SideBarState {
    isOpen: boolean
}

const initialState: SideBarState = {
    isOpen: false
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => { state.isOpen = !state.isOpen }
    }
})

export const { toggleSidebar } = sidebarSlice.actions

export const sideBarStatus = (state: RootState) => state.sidebar.isOpen

export default sidebarSlice.reducer