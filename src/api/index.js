// 包含n个接口请求函数
import ajax from './ajax'
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
    // 获取食品分类
export const reqFoodTypes = () => ajax(`/index_category`)
    // 根据经纬度获取商铺列表
export const reqShops = (longitude, latiude) => ajax(`/shops`, { longitude: longitude, latiude: latiude })

// 根据经纬度和关键字搜索商铺列表
export const reqAddress = (keyword, geohash) => ajax(`/search_shops`, { keyword: keyword, geohash: geohash })

// 获取一次性验证码
export const reqAddress = () => ajax(`/captcha`)

// 用户名密码登录
export const reqAddress = (name, pwd, captcha) => ajax(`/login_pwd`, { name: name, pwd: pwd, captcha: captcha })

// 发送短信验证码
export const reqAddress = (phone) => ajax(`/sendcode`, { phone: phone })

// 手机号验证码登录
export const reqAddress = (phone, code) => ajax(`/login_sms${phone}${code}`)

// 根据会话获取用户信息
export const reqAddress = () => ajax(`/userinfo`)

// 用户登出
export const reqAddress = () => ajax(`/logout`)