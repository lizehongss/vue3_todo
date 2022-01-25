// 将string类型都转换为T类型并返回给recordable
declare type Recordable<T = any> = Record<string, T>;
