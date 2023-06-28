// @ts-nocheck
import request from './request';
import getPrefix from './urlPrefix';
import { TgroupType } from '@/utils/types';
import { warn } from '@/utils/function';

class Http {
    protected prefix: string = getPrefix(undefined);
    protected config: any = {};
    constructor(group?: TgroupType) {
        this.prefix = getPrefix(group);
    }
    private combineUrl(url: string) {
        return this.prefix + url;
    }
    setExtraConfig(config: any) {
        this.config = config;
    }
    get<T>(url: string, arg?: T, message?: string) {
        return new Promise((resolve, reject) => {
            request
                .get(this.combineUrl(url), {
                    params: arg,
                    ...this.config,
                })
                .then((res: any) => {
                    // 根据与后端的约定format数据，并做resolve或reject
                    console.log(res);
                })
                .catch(reject)
                .finally(() => {
                    this.config = {};
                });
        });
    }
    post<T>(url: string, message?: string | T, arg?: T) {
        const isFull = arguments.length === 3;
        if (!isFull) {
            arg = message as T;
        }
        const errMessage = '你的自定义错误';
        return new Promise((resolve, reject) => {
            request
                .post(this.combineUrl(url), arg, {
                    ...this.config,
                })
                .then((res: any) => {
                    // 根据与后端的约定format数据，并做resolve或reject
                    console.log(res);
                })
                .catch(() => {
                    warn(errMessage);
                    reject(errMessage);
                })
                .finally(() => {
                    this.config = {};
                });
        });
    }
}

export const http = new Http();
export const httpRequest = Http;
export const usePrefix = getPrefix;
