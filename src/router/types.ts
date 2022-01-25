import type { RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";

// 泛型: 在使用时再指定类型的一种特性
// <T extends any = any>泛型约束
// ReturnType 获取函数返回值类型
export type Component<T extends any = any> = 
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

// 定义meta形状
export interface RouteMeta {
  title: string;
}
// 定义 AppRouteRecordRaw的形状
// Omit: 从一个对象类型中剔除某些属性，并创建一个新的对象类型
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[]; 
  props?: Recordable;
  fullPath?: string;
}
export type AppRouteModule = AppRouteRecordRaw