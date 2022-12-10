import { createSlice } from "@reduxjs/toolkit";
import { ISystemToggle } from "../../common/interface/systemInterface";

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
}

const systemSlice = createSlice({
    name: "System",
    initialState,
    reducers: {
        toggleAdd(statte) {
            statte.add = !statte.add
        },
        toggleCollapsedNav(statte) {
            statte.collapsedNav = !statte.collapsedNav
        },
        toggleLayout(statte) {
            statte.layout = !statte.layout
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
            state.update = !state.update;
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
} = systemSlice.actions;