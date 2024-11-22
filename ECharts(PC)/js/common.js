// 上面这个代码处理过度动画（默认加上不用管）
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('sidenav-pinned')
    document.body.classList.add('ready')
  }, 200)
})

// 创建bootstrap弹窗
let toastBox = document.querySelector('#myToast')
const toast = new bootstrap.Toast(toastBox, {
  animate: true,
  autohide: true,
  delay: 2000
})

// 显示 toast
const showToastMsg = function (msg) {
  toast.show()
  document.querySelector('.toast-body').innerHTML = msg
}

// 配置请求地址的基地址
axios.defaults.baseURL = 'https://ajax-api.itheima.net'

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    // 给我们的 config 对象 设置请求头信息
    // 获取本地存储里面的信息
    const token = localStorage.getItem('CMSBJ55_TOKEN')
    // 判断是否有token
    if (token) {
      // 才需要给请求拦截器设置 headers头信息
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么 脱壳 经过 axios 相应回来的数据 data.data  取数据时 少一个data
    // console.log(response)
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    // token失效
    // console.dir(error)
    // console.log(error.response.status)
    // 如果  error.response.status 响应状态码 等于等于 401 理解 为 token 失效
    if (error.response.status === 401) {
      // token 失效 重新登录
      localStorage.removeItem('CMSBJ55_TOKEN')
      localStorage.removeItem('CMSBJ55')
      location.href = './login.html'
    }
    return Promise.reject(error)
  }
)
