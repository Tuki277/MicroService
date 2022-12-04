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

export interface IList {
    columns: any;
    data: any;
    pageSize: number;
}