const env = import.meta.env.DEV ? 'dev' : 'prod';

const envConfig = {
  // 开发环境
  dev: {
    baseApi: '',
    testApi: '',
  },
  // 生产环境
  prod: {
    baseApi: '',
    testApi: '',
  }
}
export default {
  env,
  storagePrefix: 'my_admin_storage', // 缓存前缀
  ...envConfig[env]
}