import { IurlConfig, TgroupType } from '@/utils/types';
const mode = import.meta.env.MODE;
const urlConfig: IurlConfig = {
    // 不同域对应的前缀
};

const getPrefix = (key: TgroupType) => {
    if (key === undefined) {
        key = '';
        urlConfig[key][mode];
    }
    return urlConfig[key][mode];
};

export default getPrefix;
