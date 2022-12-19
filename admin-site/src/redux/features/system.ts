import { createSlice } from "@reduxjs/toolkit";
import { ISystemToggle } from "../../common/interface/SystemInterface";

const initialState: ISystemToggle<any> = {
    add: false,
    collapsedNav: false,
    layout: false,
    detail: false,
    noti: false,
    setting: false,
    update: false,
    payload: null,
    login: false,
    loading: true,
    id: 0,
}

const systemSlice = createSlice({
    name: "System",
    initialState,
    reducers: {
        toggleAdd(state) {
            state.add = !state.add;
        },
        toggleCollapsedNav(state) {
            state.collapsedNav = !state.collapsedNav
        },
        toggleLayout(state) {
            state.layout = !state.layout
        },
        toggleDetail(state, payload) {
            state.detail = !state.detail;
            state.payload = payload;
        },
        toggleNoti(state) {
            state.noti = !state.noti;
        },
        toggleSetting(state) {
            state.setting = !state.setting;
        },
        toggleUpdate(state, payload) {
            state.add = !state.update;
            state.payload = payload;
        },
        loginSuccess(state) {
            state.login = true;
        },
        logoutSystem(state) {
            localStorage.removeItem("refreshToken");
            state.login = false;
            window.location.reload();
        },
        showLoading(state) {
            state.loading = true;
        },
        hideLoading(state) {
            state.loading = false;
        },
        resetPayload(state) {
            state.payload = null;
        }
    },
    extraReducers: {}
})

export const systemReducer = systemSlice.reducer;

export const {
    toggleAdd,
    toggleCollapsedNav,
    toggleLayout,
    toggleDetail,
    toggleNoti,
    toggleSetting,
    loginSuccess,
    logoutSystem,
    showLoading,
    hideLoading,
    toggleUpdate,
    resetPayload,
} = systemSlice.actions;