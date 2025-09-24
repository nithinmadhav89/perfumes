
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/perfumes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/perfumes/home",
    "route": "/perfumes"
  },
  {
    "renderMode": 2,
    "route": "/perfumes/home"
  },
  {
    "renderMode": 2,
    "route": "/perfumes/about"
  },
  {
    "renderMode": 2,
    "route": "/perfumes/products"
  },
  {
    "renderMode": 2,
    "redirectTo": "/perfumes",
    "route": "/perfumes/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7424, hash: '5448491ff1df051be3025801000879a96fd43fd290141d89507015e57b0a08a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3385, hash: 'c04786eac28c914e032c4ea9339f110a700a3ea7543e3b243539887df0b5bd57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24319, hash: '02a83f939132eb2b5c273042f6b5ed41135c3840c68254cc9db6863c48cede2f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24309, hash: 'fcc13f5cb22d92c7faf4e1bbb86fe27b3eac7daa8109cb8190d6054d60820c95', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 24349, hash: '1e5a22c0e5630cf9f817cb26a09505ae5c1941734d3186644f9132c668ccac02', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'styles-JAOSXT5S.css': {size: 231069, hash: 'goEsp67zbdc', text: () => import('./assets-chunks/styles-JAOSXT5S_css.mjs').then(m => m.default)}
  },
};
