export interface ISystemToggle<T> {
    setting: boolean;
    noti: boolean;
    collapsedNav: boolean;
    add: boolean;
    update: boolean;
    detail: boolean;
    layout: boolean;
    login: boolean;
    payload: T;
}