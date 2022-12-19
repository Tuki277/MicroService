import React from "react";

export interface IPropCard {
    title: string;
    amount: number;
    link: string;
}

export interface IDataTypeListUser {
    key: React.Key;
    fullname: string;
    email: string;
    phone_number: string;
    role: string;
    status: number;
    created_at: string;
}

export interface IDataTypeListStatistical {
    key: React.Key;
    name: string;
    date: string;
}

export interface IDataListCategory {
    key: React.Key,
    name: string;
}

export interface IDataListOrder {
    key: React.Key,
    title: string;
    status: number;
    orderDate: string,
}

export interface IDataListProduct {
    key: React.Key;
    title: string;
    category: string;
    discount: number;
    deleted: number;
    thumbnail: Array<string>;
    description: string;
    price: number;
    quantity: number;
    created_at: string;
}

export interface IDataListFeedback {
    key: React.Key;
    name: string;
    email: string;
    phoneNumber: string;
    note: string;
    created_at: string;
}

export interface IDataListCode {
    key: React.Key;
    code: string;
    discount: number;
}

export interface IList {
    columns: any;
    data: any;
    pageSize: number;
}