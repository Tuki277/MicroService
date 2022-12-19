export interface ISystemToggle<T> {
    setting: boolean;
    noti: boolean;
    collapsedNav: boolean;
    add: boolean;
    update: boolean;
    detail: boolean;
    layout: boolean;
    login: boolean;
    loading: boolean;
    id: number;
    payload: T;
}

export interface IPagging {
    page: number;
    rowperpage: number;
}