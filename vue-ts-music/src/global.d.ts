declare interface BuildVar {
    _IS_MOCK: boolean;
}

declare let _build_var: BuildVar;

declare module '*.vue' {
    import Vue from "vue";
    export default Vue;
}